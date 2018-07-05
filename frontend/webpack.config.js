
const webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: 'app.js'
    },
    devServer: { 
        port: 5000,
        contentBase: './public'
    },
    plugins: [ new ExtractTextPlugin('app.css') ],
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            module: __dirname + '/node_modules'
        }
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            loader: 'file'
        }]
    }
}