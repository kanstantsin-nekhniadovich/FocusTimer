import 'dotenv/config';
import { ConfigContext, ExpoConfig } from '@expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  extra: {
    api: process.env.API,
    facebookAppId: process.env.FACEBOOK_APP_ID,
    facebookAppName: process.env.FACEBOOK_APP_NAME,
    firebaseApiKey: process.env.FIREBASE_API_KEY,
    firebaseAppId: process.env.FIREBASE_APP_ID,
    firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
    firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
    firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    firebaseAppMeasurementId: process.env.FIREBASE_APP_MEASUREMENT_ID,
  },
}) as ExpoConfig;
