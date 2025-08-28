const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[contenthash:8].js',
        path: path.resolve(__dirname, 'dist'), // Absolute path to the output directory
    },
    target: ['web', 'es5'],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html")
    })],
}