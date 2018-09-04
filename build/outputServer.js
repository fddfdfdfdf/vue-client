const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const config = require('../build/webpack.config.js');
const expressServer = require('../build/myServerTest.js');
const configInfor = require('../config/configInit.js');
const devServerOptions = {
    contentBase:configInfor.options.contentBase,
    hot: configInfor.options.hot,
    compress: true,
    host: configInfor.options.host,
    before:expressServer
};
webpackDevServer.addDevServerEntrypoints(config, devServerOptions);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, devServerOptions);




module.exports =  server
