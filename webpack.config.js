const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

//=========================================================
//  ENVIRONMENT VARS
//---------------------------------------------------------
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

//=========================================================
//  CONFIG
//---------------------------------------------------------
const config = {
    devtool: 'source-map',
    entry: {
        main: [
            `webpack-dev-server/client?http://${HOST}:${PORT}`,
            'webpack/hot/only-dev-server',
            'babel-polyfill',
            './src/main.js'
        ]
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loaders: ['react-hot', 'babel']
        }]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve('./build'),
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            favicon: './assets/favicon.png',
            filename: 'index.html',
            hash: false,
            inject: 'body',
            template: './src/index.html'
        })
    ]
};

module.exports = config;