module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          components: './src/components',
          constants: './src/constants',
          screens: './src/screens',
          navigation: './src/navigation',
          services: './src/services',
          store: './src/store',
          hooks: './src/hooks',
          helpers: './src/helpers',
        },
      },
    ],
  ],
};
