var path = require('path');
// var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// var express = require('express');
// var app = express();
// app.use(express.static(path.join(__dirname, '../dist')));

// const devMode = process.env.NODE_ENV !== 'production'

var config = {
    entry: {
        main: './main'
    },
    output: {
        path: path.join(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': path.join(__dirname, '..', 'src')
        }
    },
    devServer: {
        contentBase: path.join(__dirname, "../index.html"),
        port: 8080,
    },
   //  dev: {
   //      port: 8080, // 运行测试页面的端口
   //      assetsPublicPath: '/', // 编译发布的根目录，可配置为资源服务器域名或 CDN 域名
   //      proxyTable: {}, // 需要 proxyTable 代理的接口（可跨域）
   //      cssSourceMap: false // 是否开启 cssSourceMap
   // },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(sa|sc|c)ss$/,
                // use: [
                //     'style-loader',
                //     'css-loader'
                // ],
                loader: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: 'babel-loader',
                        css: [
                            'style-loader',
                            'css-loader',
                        ]
                    }
                }
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=1024'
            },
        ]
    },
    // resolve: {
    //     alias: {
    //         'vue$': 'vue/dist/vue.esm.js'
    //     }
    // },
    plugins: [
        // new MiniCssExtractPlugin({
            // filename: devMode? 'css/mainDev.css' : "css/main.css",
            // chunkFilename: "[id].css"
        //     filename: 'css/[name].css',
        //     chunkFilename:'css/[id].css'
        // })
    ],
};

module.exports = config;