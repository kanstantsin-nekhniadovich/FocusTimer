import { storeBlobToStorage } from './firebase';

export const saveAvatarToStorage = async (userId: string, url: string) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();

    return await storeBlobToStorage(blob, `avatars/${userId}`);
  } catch {
    return null;
  }
};
