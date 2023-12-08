// @ts-check

/**
 * @type {import('@rspack/cli').Configuration}
 */
const config = {
  context: __dirname,
  entry: {
    main: "./src/main.js",
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          priority: 99,
        },
      },
    },
  },
};

module.exports = config;
