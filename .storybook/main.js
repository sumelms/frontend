const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss',
    'aria-live-storybook-addon',
  ],
  webpackFinal: async (config) => {
    config.resolve.alias['@react-keycloak/web'] = require.resolve(
      '../src/__mocks__/@react-keycloak/web.js',
    );
    config.resolve.plugins = [
      new TsconfigPathsPlugin({ extensions: config.resolve.extensions }),
    ];
    return config;
  },
};
