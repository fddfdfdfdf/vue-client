const express = require('express');
const proxy = require('http-proxy-middleware');
const app = express();
const configInfor = require('../config/configInit.js');
const reqPath = require('./paths.js');


//跨域对象
const proxyOption = {
    target: configInfor.proxy.target,
    pathRewrite: configInfor.proxy.pathRewrite,
    changeOrigin:configInfor.proxy.changeOrigin
};

const expressServer = function (app){
        app.get('/some/path', function(req, res) {
            res.json({ custom: 'response' });
        });
        app.get('/some/paths', function(req, res) {
            res.json({ custom: 'responsess' });
        });
        // 反向代理
        app.use('/v2/*', proxy(proxyOption));
        // 静态资源路径（执行顺序）//不能放在外面执行
        app.use('/', express.static(reqPath.reqPath("../","static")));
}
module.exports = expressServer;