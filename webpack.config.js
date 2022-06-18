const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    mode: "production",
    devServer: {
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                          '@babel/preset-env', 
                          '@babel/preset-react' 
                        ]
                      }, 
                },
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};