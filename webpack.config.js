const path = require('path');
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', "css-loader", "sass-loader"]
            }
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "dist")
        },
        port: 9000,
        historyApiFallback: true,

    },
    mode: "development"
}