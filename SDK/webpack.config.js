const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: {
        'sc-v1': './src/sc-v1.js',
        'sc-v2': './src/sc-v2.js',
    },
    output: {
        path: path.resolve(__dirname, "./sdk-static"),
        publicPath: "/sdk-static/",
        filename: '[name].js'
    },

    module: {
        rules : [
            {
                parser: {
                    amd: false,
                }
            }
        ]

    },
    plugins: [
        new webpack.DefinePlugin({
            'define': 'PP.define',
        })
    ]
};