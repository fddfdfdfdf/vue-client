module.exports = {
    //热加载模块
    options:{
        contentBase: './dist',
        hot: true,
        compress: true,
        host: 'localhost',
    },
    //反向代理设置
    proxy:{
        target: 'http://api.silianmall.com',//http://api.silianmall.com/v2/ecapi.banner.list
        pathRewrite: {
            '^/v2/' : '/v2/' // 重写请求，api/解析为/
        },
        changeOrigin:true
    }

}