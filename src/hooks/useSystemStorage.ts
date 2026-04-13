import { useState, useCallback } from 'react';

interface StoredFile {
    id: number;
    url: string;
    filename: string;
    original_filename: string;
    mime_type: string;
    size: number;
    human_size: string;
}

interface UploadResponse {
    file: StoredFile;
    storage_used: number;
}

/**
 * Hook for managing file storage via the System Storage API.
 *
 * Usage:
 * ```tsx
 * const { upload, deleteFile, getFiles, uploading, error } = useSystemStorage();
 *
 * // Upload a file
 * const file = await upload(selectedFile);
 * if (file) {
 *   console.log('Uploaded:', file.url);
 * }
 *
 * // Get all files
 * const files = await getFiles();
 *
 * // Delete a file
 * await deleteFile(file.id);
 * ```
 */
export function useSystemStorage() {
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const config = typeof window !== 'undefined' ? window.__APP_CONFIG__ : undefined;

    const upload = useCallback(async (file: File): Promise<StoredFile | null> => {
        if (!config) {
            setError('Storage not configured. Please ensure __APP_CONFIG__ is set.');
            return null;
        }

        setUploading(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await fetch(`${config.apiUrl}/api/app/${config.projectId}/files`, {
                method: 'POST',
                headers: {
                    'X-Project-Token': config.apiToken,
                },
                body: formData,
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || data.message || 'Upload failed');
            }

            const data: UploadResponse = await response.json();
            return data.file;
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Upload failed';
            setError(message);
            return null;
        } finally {
            setUploading(false);
        }
    }, [config]);

    const deleteFile = useCallback(async (fileId: number): Promise<boolean> => {
        if (!config) {
            setError('Storage not configured');
            return false;
        }

        try {
            const response = await fetch(`${config.apiUrl}/api/app/${config.projectId}/files/${fileId}`, {
                method: 'DELETE',
                headers: {
                    'X-Project-Token': config.apiToken,
                },
            });
            return response.ok;
        } catch {
            return false;
        }
    }, [config]);

    const getFiles = useCallback(async (): Promise<StoredFile[]> => {
        if (!config) {
            return [];
        }

        try {
            const response = await fetch(`${config.apiUrl}/api/app/${config.projectId}/files`, {
                headers: {
                    'X-Project-Token': config.apiToken,
                },
            });

            if (!response.ok) {
                return [];
            }

            const data = await response.json();
            return data.files || [];
        } catch {
            return [];
        }
    }, [config]);

    const isConfigured = !!config;

    return {
        upload,
        deleteFile,
        getFiles,
        uploading,
        error,
        isConfigured,
    };
}
