import { AsyncStorage } from 'react-native';

export const storeItem = async (key: string, data: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, data);
  } catch { }
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
