const path = require('path');

module.exports = {
    entry: './src/app.module.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'angular.bundle.js'
    },
    module: {
        rules : [
            {
                test : /src.*\.js$/,
                use  : [
                    {
                        loader : 'ng-annotate-loader'
                    },
                    {
                        loader : 'babel-loader'
                    }
                ]
            }
        ]
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
};
