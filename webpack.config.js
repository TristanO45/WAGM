const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /|.js$/,
                excluse: /node_modules/,
                use: {
                    loader: 'babe-loader'
                },
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/index.html'
        })
    ]
}