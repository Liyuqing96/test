var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')
var merge = require('webpack-merge')
var webpackBaseConfig = require('./webpack.config.js')

//clean webpackBaseConfig plugins
webpackBaseConfig.plugins = [];

modules.exports = merge(webpackBaseConfig, {
    output: {
        publicPath: '/dist/',
        //将文件命名重命名为带有20位hash值的唯一文件
        filename: '[name].[hash].js'
    },
    plugins: [
        //定义当前node环境为生产环境
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        // 压缩js
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        // 提取模板，并保存入口html文件
        new htmlWebpackPlugin({
            filename: '../index_prod.html',
            template: './index.ejs',
            inject: false
        })
    ],
})