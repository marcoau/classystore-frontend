'use strict';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const port = 8000;

const serverOptions = {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
};

const server = new WebpackDevServer(webpack(config), serverOptions)
  .listen(port, 'localhost', (err, result) => {
    if (err) return console.log(err);

    console.log(`Listening at http://localhost:${port}`);
  });
