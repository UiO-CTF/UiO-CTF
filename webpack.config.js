const fs = require('fs');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

function loadJSON(path) {
    return fs.readFileSync(path, 'utf-8');
}

/**
 * Webpack Configuration
 */
module.exports = {

    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/', 
    },

    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]

            },
        ],
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),

        new webpack.DefinePlugin({
            'CONTENT': loadJSON(path.resolve(__dirname, 'data', 'content.json'))
        }),
        new CopyPlugin([{
            from: './docs/portraits',
            to: 'portraits'
        }]),
    ],

    mode: 'development',

    /**
     * Provides a simple dev server for use in development.
     */
    devServer: {
        contentBase: './dist',
        host: '0.0.0.0',
    },

    devtool: 'inline-source-map',

}
