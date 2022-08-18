const path = require('path').resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: path(__dirname, '..', 'src', 'index.tsx'),
    },
    output: {
        filename: '[name].[contenthash:6].ts',
        path: path(__dirname, '..', 'build'),
    },
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx'],

    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }, {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'images/[hash]-[name].[ext]',
                    },
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path(__dirname, '..', 'public', 'index.html'),
        })
    ]
}