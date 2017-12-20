const path = require("path");

module.exports = {
    entry: ["./src/App.tsx"],
    output: {
        path: path.resolve(__dirname, "./dist"),
        publicPath: "/dist/",
        filename: 'react.bundle.js'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
};
