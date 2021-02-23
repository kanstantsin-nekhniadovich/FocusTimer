import * as ImageManipulator from 'expo-image-manipulator';
import * as ExpoImagePicker from 'expo-image-picker';

export const uploadImageFromMediaLibrary = async (width: number) => {
  const media = await ExpoImagePicker.launchImageLibraryAsync({
    mediaTypes: ExpoImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [3, 4],
  });

  if (media.cancelled) {
    return media;
  }

  return await ImageManipulator.manipulateAsync(media.uri,
    [{ resize: { width } }], { compress: 0.8, format: ImageManipulator.SaveFormat.JPEG });
};

type CancelledImagePickerResult = ExpoImagePicker.ImagePickerResult & { cancelled: true };

export const isMediaUploadCancelledGuard =
  (result: ImageManipulator.ImageResult | ExpoImagePicker.ImagePickerResult): result is CancelledImagePickerResult => {
    return 'cancelled' in result && result.cancelled;
  };
