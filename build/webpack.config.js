const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const Dashboard = require('webpack-dashboard');
// const dashboard = new Dashboard();
const reqPath = require('./paths.js');
const DashboardPlugin = require('webpack-dashboard/plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    mode:"development",
    devtool: 'cheap-module-eval-source-map',
    entry: {
        app: [
            require.resolve('babel-polyfill'),
            './src/index.js'
         ]
    },
    output: {
        publicPath: '', //编译好的文件，在服务器的路径,这是静态资源引用路径
        path:path.resolve(__dirname, '/../dist'),
        filename: 'js/[name].[hash:10].js',
        chunkFilename: 'js/[name].[hash:10].js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        // make sure to include the plugin for the magic
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement',
            filename: '../dist/index.html',
            template: './public/index.html',
            inject: 'body'
        }),
        // webpack-dev-server 强化插件
        // new DashboardPlugin(dashboard.setData),用来记录日志的
        new DashboardPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
   ],
    module:{
        strictExportPresence: true,
        rules:[
            {
                test: /\.vue$/,
                include: reqPath.reqPath('../',"src"),
                use:[
                    {
                        loader: require.resolve('vue-loader'),
                        options: {
                            cacheDirectory: true,
                            plugins: ["transform-decorators-legacy"],
                        }
                    }
                ]
            },
            {
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                        loader: require.resolve('url-loader'),
                        options: {
                            limit: 10000,
                            name: '/imgages/[name].[hash:8].[ext]',
                        }
                    },
            {
                        test: /\.js$/,
                        include: reqPath.reqPath('../',"src"),
                        use: [
                            {
                                loader: require.resolve('babel-loader'),
                                options: {
                                    babelrc: true,
                                    cacheDirectory: true,
                                    plugins: ["transform-decorators-legacy"],
                                }
                            }
                        ]
                    },
            {
                        test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
                        exclude: /^node_modules$/,
                        loader: 'file-loader?name=[name].[ext]'
              },
            {
                test: /\.(css|less)$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" ,// translates CSS into CommonJS
                    options: {
                        autoprefixer: true,
                        // modules: true,
                        // localIdentName: '[name]__[local]',
                    }
                }, {
                    loader: "postcss-loader" ,// translates CSS into CommonJS
                    options: {
                        sourceMap: true
                    }
                }, {
                        loader: 'less-loader',
                        options: {
                            relativeUrls: true
                        }
                    }]
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            "@": path.resolve(__dirname, '/../src')
        },
        extensions: ['*','.js', '.vue', '.less', '.scss', '.css']
    }
};