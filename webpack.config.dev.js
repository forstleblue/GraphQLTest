const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        path.resolve(__dirname, 'app/index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
                WEBPACK: true
            }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
    ],
    module: {
        loaders: [
            {
                test: /\.(js)$/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'react', 'stage-0', 'react-hmre']
                    }
                },
                include: path.resolve(__dirname, 'app'),
            },
            {
                test: /\.(css|scss)$/,
                loader: 'style-loader!css-loader',
            },
            {
                test: /\.html$/,
                loader: 'html-loader?attrs[]=video:src'
            }, {
                test: /\.(png|mp4|gif|svg)$/,
                loader: 'file-loader?name=videos/[name].[ext]'
            }
        ]
    }
};
