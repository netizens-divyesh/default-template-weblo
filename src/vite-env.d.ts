/// <reference types="vite/client" />

// Unified __APP_CONFIG__ type declaration (used by firebase.ts and useSystemStorage.ts)
interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

interface SystemConfig {
  apiUrl: string;
  projectId: string;
  apiToken: string;
  firebase?: FirebaseConfig;
  firebasePrefix?: string;
}

declare global {
  interface Window {
    __APP_CONFIG__?: SystemConfig;
  }
}

export {};
