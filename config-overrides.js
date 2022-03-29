const { adjustStyleLoaders, addWebpackAlias, override } = require('customize-cra')
const fs = require('fs')
const path = require('path')
module.exports = override(
    adjustStyleLoaders((loader) => {
        loader.use[loader.use.length] = {
            loader: 'sass-resources-loader',
            options: {
                resources: [
                    path.resolve(__dirname, './src/styles/functions.scss'),
                    path.resolve(__dirname, './src/styles/variables.scss'),
                    // path.resolve(__dirname, './src/styles/_reset.scss')
                ]
            }
        }
    }),
    addWebpackAlias({
        '@': path.resolve(__dirname, './src')
    })
) 