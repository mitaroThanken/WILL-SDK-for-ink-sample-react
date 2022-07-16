/* config-overrides.js */
const webpack = require('webpack');

module.exports = function override(config, _env) {
  if (!config.eternals) {
    config.externals = [];
  }

  if (!config.plugins) {
    config.plugins = [];
  }

  config.externals = [...config.externals, 'bindings', 'worker_threads', 'canvas', 'gl', 'systeminformation'];

  config.plugins = config.plugins.concat([
    new webpack.ProvidePlugin({
      // expose some of public dependencies - these ones which do not provides ECMA 6 exports
      ClipperLib: 'clipper-lib',
      poly2tri: 'poly2tri',
      protobuf: 'protobufjs',
      md5: 'js-md5'
    })
  ]);

  config.plugins = config.plugins.concat([
    new webpack.DefinePlugin({
      DIGITAL_INK_ENV: '"BROWSER"'
    })
  ]);

  return config;
}
