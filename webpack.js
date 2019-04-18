var path = require('path');

module.exports = {
    entry: './src/main.tsx',
    output: {
        path: path.resolve(__dirname, 'dist/static'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    module: {
        rules: [{
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }],
    }
};
