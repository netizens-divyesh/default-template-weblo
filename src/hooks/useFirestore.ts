import { useState, useEffect, useCallback, useMemo } from 'react';
import {
    collection,
    onSnapshot,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    query,
    QueryConstraint,
    DocumentData,
} from 'firebase/firestore';
import { getDb, getCollectionPrefix } from '../lib/firebase';

export interface UseFirestoreOptions {
    /** Additional query constraints (where, orderBy, limit, etc.) */
    constraints?: QueryConstraint[];
    /** Whether to enable the Firestore subscription (default: true) */
    enabled?: boolean;
}

interface UseFirestoreReturn<T> {
    /** Array of documents with their IDs */
    documents: (T & { id: string })[];
    /** Loading state */
    loading: boolean;
    /** Error message if any */
    error: string | null;
    /** Add a new document */
    add: (data: Omit<T, 'id'>) => Promise<string | null>;
    /** Update an existing document */
    update: (id: string, data: Partial<T>) => Promise<boolean>;
    /** Delete a document */
    remove: (id: string) => Promise<boolean>;
    /** Refresh the documents (re-subscribe) */
    refresh: () => void;
}

/**
 * Hook for managing Firestore collections with real-time updates.
 * Automatically prefixes collection names with the project's Firebase prefix.
 *
 * Usage:
 * ```tsx
 * interface Task {
 *   title: string;
 *   completed: boolean;
 *   createdAt: Date;
 * }
 *
 * function TaskList() {
 *   const { documents: tasks, loading, error, add, update, remove } = useFirestore<Task>('tasks');
 *
 *   const handleAddTask = async () => {
 *     const id = await add({ title: 'New Task', completed: false, createdAt: new Date() });
 *     if (id) console.log('Created task:', id);
 *   };
 *
 *   const handleToggle = async (task: Task & { id: string }) => {
 *     await update(task.id, { completed: !task.completed });
 *   };
 *
 *   const handleDelete = async (taskId: string) => {
 *     await remove(taskId);
 *   };
 *
 *   if (loading) return <div>Loading...</div>;
 *   if (error) return <div>Error: {error}</div>;
 *
 *   return (
 *     <ul>
 *       {tasks.map(task => (
 *         <li key={task.id}>
 *           <input
 *             type="checkbox"
 *             checked={task.completed}
 *             onChange={() => handleToggle(task)}
 *           />
 *           {task.title}
 *           <button onClick={() => handleDelete(task.id)}>Delete</button>
 *         </li>
 *       ))}
 *       <button onClick={handleAddTask}>Add Task</button>
 *     </ul>
 *   );
 * }
 * ```
 *
 * @param collectionName - The name of the collection (will be prefixed automatically)
 * @param options - Optional query constraints and enabled flag
 */
export function useFirestore<T extends DocumentData>(
    collectionName: string,
    options: UseFirestoreOptions = {}
): UseFirestoreReturn<T> {
    const [documents, setDocuments] = useState<(T & { id: string })[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [refreshKey, setRefreshKey] = useState(0);

    const { constraints = [], enabled = true } = options;

    const db = getDb();
    const prefix = getCollectionPrefix();

    // Memoize fullPath to prevent infinite loops
    const fullPath = useMemo(
        () => prefix ? `${prefix}/${collectionName}` : collectionName,
        [prefix, collectionName]
    );

    useEffect(() => {
        // Skip if disabled or no collection name
        if (!enabled || !collectionName) {
            setLoading(false);
            setDocuments([]);
            return;
        }

        if (!db) {
            setLoading(false);
            setError('Firebase not initialized. Make sure to call initFirebase() first.');
            return;
        }

        setLoading(true);
        setError(null);

        const q = query(collection(db, fullPath), ...constraints);

        const unsubscribe = onSnapshot(
            q,
            (snapshot) => {
                const docs = snapshot.docs.map((doc) => ({
                    ...(doc.data() as T),
                    id: doc.id,
                }));
                setDocuments(docs);
                setLoading(false);
            },
            (err) => {
                console.error('Firestore error:', err);
                setError(err.message);
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, [db, fullPath, refreshKey, enabled, collectionName, constraints]);

    const add = useCallback(
        async (data: Omit<T, 'id'>): Promise<string | null> => {
            if (!db) {
                setError('Firebase not initialized');
                return null;
            }

            try {
                const docRef = await addDoc(collection(db, fullPath), data as DocumentData);
                return docRef.id;
            } catch (err) {
                const message = err instanceof Error ? err.message : 'Failed to add document';
                setError(message);
                console.error('Error adding document:', err);
                return null;
            }
        },
        [db, fullPath]
    );

    const update = useCallback(
        async (id: string, data: Partial<T>): Promise<boolean> => {
            if (!db) {
                setError('Firebase not initialized');
                return false;
            }

            try {
                await updateDoc(doc(db, fullPath, id), data as DocumentData);
                return true;
            } catch (err) {
                const message = err instanceof Error ? err.message : 'Failed to update document';
                setError(message);
                console.error('Error updating document:', err);
                return false;
            }
        },
        [db, fullPath]
    );

    const remove = useCallback(
        async (id: string): Promise<boolean> => {
            if (!db) {
                setError('Firebase not initialized');
                return false;
            }

            try {
                await deleteDoc(doc(db, fullPath, id));
                return true;
            } catch (err) {
                const message = err instanceof Error ? err.message : 'Failed to delete document';
                setError(message);
                console.error('Error deleting document:', err);
                return false;
            }
        },
        [db, fullPath]
    );

    const refresh = useCallback(() => {
        setRefreshKey((prev) => prev + 1);
    }, []);

    return {
        documents,
        loading,
        error,
        add,
        update,
        remove,
        refresh,
    };
}
