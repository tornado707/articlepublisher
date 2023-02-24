const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: {
        'polyfills': './public/polyfills',
        'vendor': './public/vendor',
        'bootstrap': './public/bootstrap'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['*', '.js', '.ts']
    },
    output: {
        path: path.resolve(__dirname, 'public/build'),
        filename: '[name].js',
    },
    module: {
        rules: [{
            test: /\.ts$/,
            loader: ['ts-loader', ]
        },
        {
            test: /\.css$/,
            use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core/,
            path.resolve(__dirname, 'public'), // path to your src
            {}
        )
    ],


};