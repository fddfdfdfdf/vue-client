module.exports = {
    plugins: [
        require('postcss-inline-svg')({
            removeFill: false
        }),
    //     require('postcss-pxtorem')({
    //     replace: process.env.NODE_ENV === 'production',
    //     rootValue: 750 / 16,
    //     minPixelValue: 1.1,
    //     propWhiteList: [],
    //     unitPrecision: 5
    // }),
        require('autoprefixer')({
            browsers: ['> 0%'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true
             })]
};
