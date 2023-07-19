const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        // clean /dist before each build
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Create React From Scratch',
            meta: { viewport: 'width=device-width, initial-scale=1.0' },
            template: './index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: 'defaults' }],
                            ['@babel/preset-react'],
                        ],
                    },
                },
            },
        ],
    },
    optimization: {
        // to prevent vendor chunk from being regenerated due to module resolving order is changed
        // when a new dependency is included
        moduleIds: 'deterministic',
        // extract the boilerplate for webpack runtime code
        runtimeChunk: 'single',
        // remove duplicate dependencies from bundles
        splitChunks: {
            chunks: 'all',
        },
    },
};
