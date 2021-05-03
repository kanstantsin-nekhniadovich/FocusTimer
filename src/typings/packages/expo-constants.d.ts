import { Constants as TConstants, AppManifest } from 'expo-constants/src/Constants.types';

declare module 'expo-constants' {
  interface Extra {
    api: string;
    firebaseApiKey: string;
    firebaseAppId: string;
    firebaseAuthDomain: string;
    firebaseMessagingSenderId: string;
    firebaseProjectId: string;
    firebaseStorageBucket: string;
    firebaseAppMeasurementId: string;
  }

  interface Manifest extends AppManifest {
    extra: Extra;
  }

  interface Constants extends TConstants {
    manifest: Manifest;
  }
}
