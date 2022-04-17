const { adjustStyleLoaders, addWebpackAlias, override } = require('customize-cra')
const fs = require('fs')
const path = require('path')

const changePublicPath = config => {
    config.output.publicPath = 'build/';
    return config
}
module.exports = override(
    adjustStyleLoaders((loader) => {
        loader.use[loader.use.length] = {
            loader: 'sass-resources-loader',
            options: {
                resources: [
                    path.resolve(__dirname, './src/styles/functions.scss'),
                    path.resolve(__dirname, './src/styles/variables.scss'),
                    path.resolve(__dirname, './src/styles/mixins.scss'),
                ]
            }
        }
    }),
    addWebpackAlias({
        '@': path.resolve(__dirname, './src')
    }),
    changePublicPath
) 