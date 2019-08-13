const config = {
  poweredByHeader: false,
  useFileSystemPublicRoutes: false,
  distDir: "../.next",
  publicRuntimeConfig: {
    contentful: {
    },
  },
  webpack: (config, { dev }) => {
    if (dev) {
      const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
      config.plugins.push(
        new ForkTsCheckerWebpackPlugin({
          tsconfig: "../tsconfig.json",
        })
      );
    }
    return config;
  },
};

const withSass = require("@zeit/next-sass");
const withTypescript = require("@zeit/next-typescript");
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withFonts = require("next-fonts");

const plugins = [withTypescript, withFonts, withImages, withSass];
module.exports = withPlugins(plugins, config);
