const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: {
        pagescript: './src/js/pagescript.js',
        popup: './src/js/popup.js',
        background: './src/js/background.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.css', '.scss']
    },
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.LoaderOptionsPlugin({
            options: {
                webServerConfig: {
                    notHotReload: ['manifest.json'],
                }
            }
        }),
        new CopyWebpackPlugin([{
            from: "src/manifest.json",
            transform: function (content, path) {
                return Buffer.from(JSON.stringify({
                    version: process.env.npm_package_version,
                    ...JSON.parse(content.toString())
                }))
            },
            to: './manifest.json',
        }, {
            from: 'src/icon', to: 'icon',
        }
        ]),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "popup.html"),
            filename: "popup.html",
            chunks: ["popup"]
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "libplus-page.html"),
            filename: "libplus-page.html",
            chunks: ["libplus-page"]
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "background.html"),
            filename: "background.html",
            chunks: ["background"]
        }),
        new webpack.HotModuleReplacementPlugin(),
        new WriteFilePlugin(),
    ],
};
