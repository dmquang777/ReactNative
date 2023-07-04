module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./components/database/images/'], // <- your asset folder's path
  dependencies: {
    'react-native-vector-icons': {
      platforms: {
        ios: null,
      },
    },
  },
};
