import { AsyncStorage } from 'react-native';

import { isDefined } from '../utils/isDefined';

export const storeItem = async <T extends unknown>(key: string, data: T): Promise<T | null> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
    return data;
  } catch {
    return null;
  }
};

export const getItem = async <T extends Unrestricted>(key: string): Promise<Nullable<T>> => {
  try {
    const item = await AsyncStorage.getItem(key);

    if (!isDefined(item)) {
      return null;
    }

    return JSON.parse(item);
  } catch {
    return null;
  }
};

export const removeItem = async (key: string): Promise<void> => {
  await AsyncStorage.removeItem(key);
};
