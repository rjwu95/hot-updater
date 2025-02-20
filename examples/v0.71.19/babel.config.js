module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'hot-updater/babel-plugin',
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
  ],
};
