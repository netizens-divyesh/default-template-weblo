import { initializeApp, FirebaseApp, getApps } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getAuth, Auth, setPersistence, browserLocalPersistence } from 'firebase/auth';

let db: Firestore | null = null;
let auth: Auth | null = null;

/**
 * Initialize Firebase with the config from __APP_CONFIG__.
 * Returns the Firestore instance or null if config is not available.
 *
 * Usage:
 * ```tsx
 * import { initFirebase, getDb } from '../lib/firebase';
 *
 * // Initialize once (usually in App.tsx or main.tsx)
 * initFirebase();
 *
 * // Get the database instance
 * const db = getDb();
 * ```
 */
export function initFirebase(): Firestore | null {
    const config = typeof window !== 'undefined' ? window.__APP_CONFIG__?.firebase : undefined;

    if (!config) {
        console.warn('Firebase config not found in __APP_CONFIG__');
        return null;
    }

    // Validate config has required fields before initializing
    if (!config.apiKey || !config.projectId || config.apiKey.length < 10) {
        console.warn('Firebase config is incomplete or invalid');
        return null;
    }

    if (db) return db;

    const existingApps = getApps();
    const app: FirebaseApp = existingApps.length > 0
        ? existingApps[0]
        : initializeApp(config);

    db = getFirestore(app);

    // Initialize Auth with local persistence (stays logged in on refresh)
    auth = getAuth(app);
    setPersistence(auth, browserLocalPersistence).catch(console.error);

    return db;
}

/**
 * Get the Firestore database instance.
 * Returns null if Firebase hasn't been initialized.
 */
export function getDb(): Firestore | null {
    return db;
}

/**
 * Get the Firebase Auth instance.
 * Returns null if Firebase hasn't been initialized.
 */
export function getFirebaseAuth(): Auth | null {
    return auth;
}

/**
 * Get the collection prefix for this project.
 * All collections should be prefixed with this to scope data per-project.
 */
export function getCollectionPrefix(): string {
    return typeof window !== 'undefined'
        ? window.__APP_CONFIG__?.firebasePrefix || ''
        : '';
}

/**
 * Reset the Firebase instance (useful for testing or re-initialization).
 */
export function resetFirebase(): void {
    db = null;
    auth = null;
}
