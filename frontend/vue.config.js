const path = require("path");

module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,

  configureWebpack: {
    //Necessary to run npm link https://webpack.js.org/configuration/resolve/#resolve-symlinks
    resolve: {
      symlinks: false
    },
    plugins: [
    ]
  },
  transpileDependencies: [
    '@coreui/utils'
  ],

  outputDir: "../public/v2",
  publicPath: "v2",
  indexPath: path.resolve(__dirname, "../resources/views/v2/index.twig"),
  filenameHashing: false,
  integrity: true,
};
