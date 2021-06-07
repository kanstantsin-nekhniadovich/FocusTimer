const expoPreset = require('jest-expo/jest-preset');

module.exports = Object.assign({}, expoPreset, {
  setupFiles: [require.resolve('./save-promise.js')]
    .concat(expoPreset.setupFiles)
    .concat([require.resolve('./restore-promise.js')]),
});
