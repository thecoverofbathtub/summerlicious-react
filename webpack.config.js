const path = require('path');
const webpack = require('webpack');

//=========================================================
//  ENVIRONMENT VARS
//---------------------------------------------------------
const NODE_ENV = process.env.NODE_ENV;

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;


//=========================================================
//  CONFIG
//---------------------------------------------------------
const config = {
    entry: {
        main: ['./src/app.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve('./build'),
        publicPath: '/'
    }
};

module.exports = config;