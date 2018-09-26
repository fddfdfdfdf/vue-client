const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const reqPath = require('./paths.js');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const  CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode:  'production',
    devtool: 'source-map',
    entry: {
        vue: [
            require.resolve('babel-polyfill'),
            "vue",
        ],
        vueRouter:[
            "fastclick",
            "axios",
            "vue-router",
        ],
        app: [
            "./src/index"
        ]
    },
    output: {
        path: path.join(__dirname, "../dist"),
        publicPath: "./",
        filename: "js/[name].[hash].js",
        chunkFilename: "js/[name].[chunkhash].js"
    },
    optimization: {
        runtimeChunk: {
            name: 'manifest'
        },
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false, // set to true if you want JS source maps,
                uglifyOptions: {
                    warnings: false
                }
            }),
            new OptimizeCSSAssetsPlugin({
                assetNameRegExp: /\.(css|less)$/g,
                cssProcessor: require('cssnano'),
                cssProcessorOptions: {
                    discardComments: {
                     removeAll: true
                    }
                },
                canPrint: true
            })
        ],
        splitChunks:{
            chunks: 'async',
            minSize: 400,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: false,
            cacheGroups: {
                vue: {
                    name: 'vue',
                    chunks: 'initial',
                    priority: -10,
                    reuseExistingChunk: false,
                    test: /node_modules\/(.*)\.js/
                },
                vueRouter: {
                    name: 'vueRouter',
                    chunks: 'initial',
                    priority: -10,
                    reuseExistingChunk: false,
                    test: /node_modules\/(.*)\.js/
                },
                styles: {
                    name: 'styles',
                    test: /\.(less|css)$/,
                    chunks: 'all',
                    minChunks: 1,
                    reuseExistingChunk: true,
                    enforce: true
                }
            }
        }
    },
    module: {
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
                    name: '../static/media/[name].[hash:8].[ext]',
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
                use: [
                    MiniCssExtractPlugin.loader,
                    {
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
                        loader: "resolve-url-loader",
                    }, {
                        loader: 'less-loader',
                        options: {
                            relativeUrls: true
                        }
                    }
                ]
            }
        ]
    },
    performance: {
        hints: false
    },
    plugins: [
        // make sure to include the plugin for the magic
        new CleanWebpackPlugin([path.join(__dirname, "../dist")]),
        new VueLoaderPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[contenthash:5].css',
            chunkFilename: 'css/[name]-[contenthash:5].css'  // use contenthash *
        }),
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement',
            filename: '../dist/index.html',
            template: './public/index.html',
            inject: 'body'
        }),
        new CopyWebpackPlugin([{
            from:path.resolve(__dirname,'../static'),
            to:'../dist'
        }])
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            "@": path.resolve(__dirname, 'src')
        },
        extensions: ['*','.js', '.vue', '.less', '.scss', '.css']
    }
};