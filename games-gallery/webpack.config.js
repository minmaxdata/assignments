// webpack v4
const path = require('path');
const DIST_DIR = path.join(__dirname, '/public');
const SRC_DIR = path.join(__dirname, '/src');

module.exports = {
    mode: 'none',
    entry: { main: `${SRC_DIR}/index.jsx` },
    output: {
        path: DIST_DIR,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
