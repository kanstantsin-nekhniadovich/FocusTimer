import { AsyncStorage } from 'react-native';

export const storeItem = async <T extends unknown>(key: string, data: T): Promise<T | null> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
    return data;
  } catch {
    return null;
  }
};

export const getItem = async (key: string): Promise<Nullable<string>> => {
  try {
    return await AsyncStorage.getItem(key);
  } catch {
    return null;
  }
};

export const removeItem = async (key: string): Promise<void> => {
  await AsyncStorage.removeItem(key);
};
