var webpack = require("webpack");
modules.exports = {
    entry : "./src/index.js",
    output : {
        path : __dirname + '/public',
        filename : 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                    loader: 'style!css!less'
            }
        ]
    }
};