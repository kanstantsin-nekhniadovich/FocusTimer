import Constants from 'expo-constants';

import { isDefined } from './isDefined';

enum Environments {
  DEV = 'development',
  PROD = 'production',
}

const getEnvironment = (): Environments => {
  const releaseChannel = Constants.manifest.releaseChannel;

  if (isDefined(releaseChannel) && releaseChannel === Environments.PROD) {
    return Environments.PROD;
  }

  return Environments.DEV;
};


export const isProdEnv = (): boolean => getEnvironment() === Environments.PROD;
export const isDevEnv = (): boolean => getEnvironment() === Environments.DEV;
