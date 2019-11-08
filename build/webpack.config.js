var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: 'main.js'
    },
    // optimization: {
    //    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    //     splitChunks: {
    //         cacheGroups: {
    //             styles: {
    //                 name: 'styles',
    //                 test: /\.css$/,
    //                 chunks: 'all',
    //                 enforce: true,
    //             },
    //         }
    //     },
    // },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                      },
                    'style-loader',
                    'css-loader'
                ],
                // loader: [
                //     'style-loader',
                //     'css-loader'
                // ]
            },
            {
                test: /\.vue$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                },
                    'style-loader',
                    'css-loader'
                ],
                // loader: [
                //     'style-loader',
                //     'css-loader'
                // ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // filename: devMode? 'css/mainDev.css' : "css/main.css",
            // chunkFilename: "[id].css"
            filename: 'css/[name].css',
            chunkFilename:'css/[id].css'
        })
    ],
};

module.exports = config;