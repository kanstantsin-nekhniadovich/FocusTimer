import firebase from 'firebase';
import Constants from 'expo-constants';

import { getItem, removeItem } from './storage';
import { isDefined } from 'src/utils/isDefined';

const firebaseConfig = {
  apiKey: Constants.manifest.extra.firebaseApiKey,
  authDomain: Constants.manifest.extra.firebaseAuthDomain,
  projectId: Constants.manifest.extra.firebaseProjectId,
  storageBucket: Constants.manifest.extra.firebaseStorageBucket,
  messagingSenderId: Constants.manifest.extra.firebaseMessagingSenderId,
  appId: Constants.manifest.extra.firebaseAppId,
  measurementId: Constants.manifest.extra.firebaseAppMeasurementId,
};

export const FIREBASE_TOKEN_KEY = 'firebaseToken';

export const initializeFirebase = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged(async (user) => {
    if (isDefined(user)) {
      return;
    }

    await removeItem(FIREBASE_TOKEN_KEY);
  });
};

export const signIn = async () => {
  const token = await getItem(FIREBASE_TOKEN_KEY);

  if (!isDefined(token)) {
    return;
  }

  await firebase.auth().signInWithCustomToken(token);
};

export const signOut = async () => {
  await firebase.auth().signOut();
};

export const storeBlobToStorage = async (blob: Blob, refPath: string): Promise<string> => {
  const storageRef = firebase.storage().ref(refPath);
  await storageRef.put(blob);
  return await storageRef.getDownloadURL();
};

export const isFirebaseInitialized = () => firebase.apps.length > 0;
