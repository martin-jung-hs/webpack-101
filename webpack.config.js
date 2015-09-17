var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var rootDir = __dirname;
var srcDir = rootDir + "/src";
var distDir = rootDir + "/dist";

module.exports = {
    context: rootDir,

    entry: {
        entry1: srcDir + '/entry1.js',
        entry2: srcDir + '/entry2.js'
    },

    output: {
        path: distDir,
        filename: "[name].js"
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [
            { test: /\.html$/, exclude: /tmp/, loader: "ng-cache-loader" },
            { test: /\.jsx?$/, exclude: /(node_modules|tmp)/, loader: 'babel-loader' },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.(png|jpg|woff|woff2|eot|ttf|otf)/, loader: 'url-loader' },
            { test: /\.svg/, loader: 'file?name=/img/[hash].[ext]?' },
            { test: /\.less/, loader: "style-loader!css-loader!less-loader" }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "commons.js",
            chunks: ["entry1", "entry2"]
        }),
        new HtmlWebpackPlugin({
            title: 'Boxes',
            filename: '/entry1.html', // relative path from output path
            template: srcDir + '/entry1.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Circles',
            filename: '/entry2.html',
            template: srcDir + '/entry2.html'
        })
    ]
};
