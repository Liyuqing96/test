var path = require('path');
// var extractTextPlugin = require('extract-text-webpack-plugin');
// var minicssExtractPlugin = require('mini-css-extract-plugin');
var express = require('express');
var app = express();
app.use(express.static(path.join(__dirname, './dist')));

var config = {
    entry: {
        main: './main'
    },
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'main.js'
    },
    // plugins: [
    //     new minicssExtractPlugin({
    //         filename: './dist/main.css',
    //     }),
    // ],
    module: {
        rules: [
            {
                test: /\.css$/,
                // use: [{
                //          loader: minicssExtractPlugin.loader,
                //       },
                //     'style-loader',
                //     'css-loader'
                // ],
                loader: [
                    'style-loader',
                    'css-loader'
                ]
            },
        ]
    },
};

module.exports = config;