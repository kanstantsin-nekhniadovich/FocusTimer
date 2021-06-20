module.exports = {
  preset: './jestSetup/jest-preset.js',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@expo-google-fonts|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)',
  ],
  moduleNameMapper: {
    '@typings': '<rootDir>/src/typings',
    '@styles': '<rootDir>/src/styles',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  setupFiles: [
    "./jestSetup/mock.js"
  ]
};
