const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './client.tsx',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist/client'),
        // clean /dist before each build
        clean: true,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Create React From Scratch',
            meta: { viewport: 'width=device-width, initial-scale=1.0' },
            template: './index.html',
            inject: 'body',
            publicPath: '/dist/client',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
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

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.devtool = 'inline-source-map';
    }

    return config;
};
