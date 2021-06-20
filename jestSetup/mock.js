jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.mock('expo-constants', () => ({
  manifest: {
    extra: {
      firebaseApiKey: ''
    },
  }
}));
