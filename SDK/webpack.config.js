const path = require("path");
const ReplaceBundleStringPlugin = require('replace-bundle-webpack-plugin');

const REQUIRE_NAMESPACE = 'PP';


module.exports = {
    entry: {
        'sc-v1': './src/sc-v1.js',
        'sc-v2': './src/sc-v2.js',
    },
    output: {
        path: path.resolve(__dirname, "./sdk-static"),
        publicPath: "/sdk-static/",
        filename: '[name].js',
        libraryExport: "default",
        library: "[name]",
        libraryTarget: 'umd'
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

        /*Not working with Webpack defined*/
        /*new webpack.DefinePlugin({
            'define': 'PP.define',
        })*/

        new ReplaceBundleStringPlugin([{
            partten: `define([], factory)`,
            replacement: function () {
                return `${REQUIRE_NAMESPACE}.define([], factory)`;
            }
        }]),
    ]
};