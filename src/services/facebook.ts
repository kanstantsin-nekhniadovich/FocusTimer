import * as facebook from 'expo-facebook';
import Constants from 'expo-constants';

const URL = 'https://graph.facebook.com/me?fields=id,email,name,birthday,picture.type(large)';
const PERMISSIONS = ['public_profile', 'email'];

interface Picture {
  data: {
    height: number;
    width: number;
    is_silhouette: boolean;
    url: string;
  };
};

interface FacebookUser {
  id: string;
  name: string;
  picture: Nullable<Picture>;
  email: string;
};

export const initializeFacebook = async () =>
  await facebook.initializeAsync({ appId: Constants.manifest.facebookAppId, appName: Constants.manifest.facebookDisplayName });

export const logInWithReadPermissionsAsync = async () =>
  await facebook.logInWithReadPermissionsAsync({ permissions: PERMISSIONS });

export const requestUserData = async (token: string): Promise<Nullable<FacebookUser>> => {
  const response = await fetch(`${URL}&access_token=${token}`);
  return await response.json();
};

export const facebookLogout = async (): Promise<void> => await facebook.logOutAsync();

export const isFacebookUser = (candidate: Unrestricted): candidate is FacebookUser => {
  return 'name' in candidate && 'email' in candidate && 'picture' in candidate;
};

export const isSuccessLoginResult = (result: facebook.FacebookLoginResult):
  result is facebook.FacebookLoginResult & { type: 'success' } => result.type === 'success';
