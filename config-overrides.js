const { override, useBabelRc, addWebpackPlugin } = require('customize-cra');
const webpack = require('webpack');

let buildMode = 'local';
if (process.argv.indexOf('dev') > -1) buildMode = 'dev';
if (process.argv.indexOf('prod') > -1) buildMode = 'prod';

module.exports = override(
  useBabelRc(),
  addWebpackPlugin(
    new webpack.DefinePlugin({
      'process.env': {
        BUILD_TIME: "'" + new Date() + "'",
        BUILD_USERNAME: "'" + process.env.USERNAME + "'",
        BUILD_MODE: "'" + buildMode + "'",
      },
    })
  )
);
