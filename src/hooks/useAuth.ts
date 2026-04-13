import { useState, useEffect, useCallback } from 'react';
import {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut as firebaseSignOut,
    sendPasswordResetEmail,
    updateProfile,
    User,
} from 'firebase/auth';
import { getFirebaseAuth } from '../lib/firebase';

export interface AuthUser {
    uid: string;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
    emailVerified: boolean;
}

interface UseAuthReturn {
    /** Current authenticated user or null */
    user: AuthUser | null;
    /** Loading state during auth operations */
    loading: boolean;
    /** Error message if any */
    error: string | null;
    /** Whether user is authenticated */
    isAuthenticated: boolean;
    /** Create a new account with email and password */
    signUp: (email: string, password: string, displayName?: string) => Promise<boolean>;
    /** Sign in with email and password */
    signIn: (email: string, password: string) => Promise<boolean>;
    /** Sign out the current user */
    signOut: () => Promise<boolean>;
    /** Send password reset email */
    resetPassword: (email: string) => Promise<boolean>;
    /** Clear current error */
    clearError: () => void;
}

/**
 * Map Firebase error codes to user-friendly messages.
 */
function mapAuthError(error: unknown): string {
    const code = (error as { code?: string })?.code || '';
    const messages: Record<string, string> = {
        'auth/email-already-in-use': 'This email is already registered',
        'auth/invalid-email': 'Invalid email address',
        'auth/weak-password': 'Password must be at least 6 characters',
        'auth/user-not-found': 'No account found with this email',
        'auth/wrong-password': 'Incorrect password',
        'auth/invalid-credential': 'Invalid email or password',
        'auth/too-many-requests': 'Too many attempts. Please try again later',
        'auth/user-disabled': 'This account has been disabled',
        'auth/operation-not-allowed': 'This operation is not allowed',
        'auth/network-request-failed': 'Network error. Check your connection',
    };
    return messages[code] || (error as Error)?.message || 'Authentication failed';
}

/**
 * Map Firebase User to AuthUser interface.
 */
function mapUser(user: User): AuthUser {
    return {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified,
    };
}

/**
 * Hook for Firebase Authentication with email/password.
 * Automatically listens for auth state changes.
 *
 * Usage:
 * ```tsx
 * function LoginPage() {
 *   const { user, loading, error, signIn, signUp, signOut, isAuthenticated } = useAuth();
 *
 *   if (loading) return <div>Loading...</div>;
 *
 *   if (isAuthenticated) {
 *     return (
 *       <div>
 *         <p>Welcome, {user?.displayName || user?.email}</p>
 *         <button onClick={signOut}>Sign Out</button>
 *       </div>
 *     );
 *   }
 *
 *   return (
 *     <form onSubmit={(e) => {
 *       e.preventDefault();
 *       signIn(email, password);
 *     }}>
 *       {error && <p className="text-red-500">{error}</p>}
 *       <input type="email" value={email} onChange={...} />
 *       <input type="password" value={password} onChange={...} />
 *       <button type="submit">Sign In</button>
 *     </form>
 *   );
 * }
 * ```
 */
export function useAuth(): UseAuthReturn {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const auth = getFirebaseAuth();

    // Listen for auth state changes
    useEffect(() => {
        if (!auth) {
            setLoading(false);
            setError('Firebase Auth not initialized. Make sure to call initFirebase() first.');
            return;
        }

        const unsubscribe = onAuthStateChanged(
            auth,
            (firebaseUser) => {
                setUser(firebaseUser ? mapUser(firebaseUser) : null);
                setLoading(false);
            },
            (err) => {
                setError(mapAuthError(err));
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, [auth]);

    const signUp = useCallback(
        async (email: string, password: string, displayName?: string): Promise<boolean> => {
            if (!auth) {
                setError('Firebase Auth not initialized');
                return false;
            }

            try {
                setError(null);
                const result = await createUserWithEmailAndPassword(auth, email, password);
                if (displayName) {
                    await updateProfile(result.user, { displayName });
                    // Refresh user state with updated profile
                    setUser(mapUser(result.user));
                }
                return true;
            } catch (err) {
                setError(mapAuthError(err));
                return false;
            }
        },
        [auth]
    );

    const signIn = useCallback(
        async (email: string, password: string): Promise<boolean> => {
            if (!auth) {
                setError('Firebase Auth not initialized');
                return false;
            }

            try {
                setError(null);
                await signInWithEmailAndPassword(auth, email, password);
                return true;
            } catch (err) {
                setError(mapAuthError(err));
                return false;
            }
        },
        [auth]
    );

    const signOut = useCallback(async (): Promise<boolean> => {
        if (!auth) {
            setError('Firebase Auth not initialized');
            return false;
        }

        try {
            setError(null);
            await firebaseSignOut(auth);
            return true;
        } catch (err) {
            setError(mapAuthError(err));
            return false;
        }
    }, [auth]);

    const resetPassword = useCallback(
        async (email: string): Promise<boolean> => {
            if (!auth) {
                setError('Firebase Auth not initialized');
                return false;
            }

            try {
                setError(null);
                await sendPasswordResetEmail(auth, email);
                return true;
            } catch (err) {
                setError(mapAuthError(err));
                return false;
            }
        },
        [auth]
    );

    const clearError = useCallback(() => {
        setError(null);
    }, []);

    return {
        user,
        loading,
        error,
        isAuthenticated: !!user,
        signUp,
        signIn,
        signOut,
        resetPassword,
        clearError,
    };
}
