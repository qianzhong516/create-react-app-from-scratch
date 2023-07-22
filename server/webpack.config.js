const path = require('path');
const nodeExternals = require('webpack-node-externals');

const config = {
    target: 'node',
    entry: path.resolve(__dirname, 'server.ts'),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist/server'),
        // clean /dist before each build
        clean: true,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    plugins: [],
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
    // in order to ignore built-in modules like path, fs, etc.
    externalsPresets: { node: true },
    // in order to ignore all modules in node_modules folder
    externals: [nodeExternals()],
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
