module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        'root': ['.'],
        'extensions': [
          '.ts',
          '.tsx',
        ],
        'alias': {
          '@typings': './src/typings',
          '@styles': './src/styles',
        }
      }],
    ],
  };
};
