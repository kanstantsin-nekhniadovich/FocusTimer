import * as ImageManipulator from 'expo-image-manipulator';
import * as ExpoImagePicker from 'expo-image-picker';

export const uploadImageFromMediaLibrary = async () => {
  const media = await ExpoImagePicker.launchImageLibraryAsync({
    mediaTypes: ExpoImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [3, 4],
  });
  
  if (media.cancelled) {
    return media;
  }
  
  return await ImageManipulator.manipulateAsync(media.uri,
    [{ resize: { width: 200 } }], { compress: 0.8, format: ImageManipulator.SaveFormat.JPEG });
};

export const isMediaUploadCancelledGuard =
  (result: ImageManipulator.ImageResult | ExpoImagePicker.ImagePickerResult): result is ExpoImagePicker.ImagePickerResult & { cancelled: true } => {
    return 'cancelled' in result && result.cancelled;
  };
