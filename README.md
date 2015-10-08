# webpack-101
A simple example of using Webpack with React JS and ES6. 

This repo is an exercise for a blog post (http://code.hootsuite.com/webpack-101/). It demonstrates the following webpack configurations
 * how to build multiple entry points
 * how to build different resources (js, jsx, less, png) using loaders
 * how to build a common bundle for the entry points, using a plugin
 * how to build unique bundles for each entry point


## Project structure

```shell
root
 |- dist/           // bundles will be built and copied into this directory for distribution
 |
 |- src/
 |  |- assets/      // image directory
 |  |
 |  |- components/  // reusable components (modules) directory
 |  | |-blue-box/
 |  | |-blue-circle/
 |  | |-green-box/
 |  | |-green-circle/
 |  | |-red-box/
 |  | |-red-circle/
 |  | |-shared-img/ // this is a shared component for entry1 and entry2
 |  |
 |  |- entry1.html  // html for entry point 1
 |  |- entry1.js    // entry point 1
 |  |               // The entry point 1 uses the box components and the shared-img component
 |  |
 |  |- entry2.html  // html for entry point 2
 |  |- entry2.js    // entry point 2
 |  |               // The entry point 2 uses the circle components and the shared-img component
 |
 |- styles/
 |  |- base.less    // base styles for all entry points
 |  |- mixins.less  // less mixins 
 |  |- variable.less // color variables
```

## Development workflow
```shell
# To install dependencies
npm install

# To build bundles for distribution
npm run build
```

To run local server for testing
```
npm run dev
```
After running local server,

For entry point 1, please go to [http://localhost:8080/webpack-dev-server/entry1.html](http://localhost:8080/webpack-dev-server/entry1.html)

For entry point 2, please go to [http://localhost:8080/webpack-dev-server/entry2.html](http://localhost:8080/webpack-dev-server/entry2.html)

## Webpack configuration for this repo
```shell
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var rootDir = __dirname;
var srcDir = rootDir + "/src";
var distDir = rootDir + "/dist";

module.exports = {
    context: rootDir, // a base directory to resolve the “entry”

    entry: {
        entry1: srcDir + '/entry1.js',
        entry2: srcDir + '/entry2.js'
    },

    output: {
        path: distDir,
        filename: "[name].js" // [name] means we are going to use the "key" value of each entry as the bundle file name
    },

    resolve: {
        extensions: ['', '.js', '.jsx'] // resolve file extentions so that we don't have to specify the extention for js and jsx files
    },

    // loaders for different types of resources. For jsx and es6, we uses babel loader.
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
            filename: '/entry1.html', // relative path from "output" directory
            template: srcDir + '/entry1.html' // source file
        }),
        new HtmlWebpackPlugin({
            title: 'Circles',
            filename: '/entry2.html', // relative path from "output" directory
            template: srcDir + '/entry2.html' // source file
        })
    ]
};

```