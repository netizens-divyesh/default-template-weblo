import { useMemo } from 'react';
import { useFirestore, UseFirestoreOptions } from './useFirestore';

/**
 * @ai-marker AUTO_SWITCH_DATA
 * Auto-switching data hook - uses Firestore when Firebase is enabled,
 * falls back to sample data when disabled.
 *
 * Usage:
 * const { data, loading, error, isLive } = useData('posts', SAMPLE_POSTS);
 */
export function useData<T extends { id?: string | number }>(
  collectionName: string,
  sampleData: T[],
  options?: Omit<UseFirestoreOptions, 'enabled'>
): {
  data: T[];
  loading: boolean;
  error: string | null;
  isLive: boolean;
  add: (data: Omit<T, 'id'>) => Promise<string | null>;
  update: (id: string, data: Partial<T>) => Promise<boolean>;
  remove: (id: string) => Promise<boolean>;
  refresh: () => void;
} {
  // Check if Firebase is configured via window.__APP_CONFIG__
  const isFirebaseEnabled = useMemo(() => {
    if (typeof window === 'undefined') return false;
    const config = (window as Window & { __APP_CONFIG__?: { firebase?: { apiKey?: string } } }).__APP_CONFIG__;
    return !!(config?.firebase?.apiKey);
  }, []);

  const firestore = useFirestore<T>(
    isFirebaseEnabled ? collectionName : '',
    { ...options, enabled: isFirebaseEnabled }
  );

  return useMemo(() => {
    if (!isFirebaseEnabled) {
      return {
        data: sampleData,
        loading: false,
        error: null,
        isLive: false,
        add: async () => null,
        update: async () => false,
        remove: async () => false,
        refresh: () => {},
      };
    }

    return {
      data: firestore.documents.length > 0 ? firestore.documents : sampleData,
      loading: firestore.loading,
      error: firestore.error,
      isLive: true,
      add: firestore.add,
      update: firestore.update,
      remove: firestore.remove,
      refresh: firestore.refresh,
    };
  }, [isFirebaseEnabled, firestore, sampleData]);
}
