/** @format */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
})

const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([withBundleAnalyzer], {
    images: {
        domains: [
            'lh3.googleusercontent.com',
            'nft-music-users-images.s3.eu-central-1.amazonaws.com',
            'nft-music-metadata-prod.s3.eu-central-1.amazonaws.com',
            'nft-music-server-images.s3.eu-central-1.amazonaws.com'
        ]
    },
    // env: {
    //     domain: 'https://nft-music.co',
    //     nftMarketPlaceAddress: '0x7ad079C218e41BeFf9B828543fb9D4226CFb0884',
    //     nftContractAddress: '0xCb114b149A380040093e14043d137A11312537E1',
    // },
    async redirects() {
        return [
            {
                source: '/contacts',
                destination: '/kontaktu',
                permanent: true
            }
        ]
    },
    webpack(config, options) {
        const { isServer } = options
        config.module.rules.push({
            test: /\.(ogg|mp3|wav|mpe?g)$/i,
            exclude: config.exclude,
            use: [
                {
                    loader: require.resolve('url-loader'),
                    options: {
                        limit: config.inlineImageLimit,
                        fallback: require.resolve('file-loader'),
                        publicPath: `${config.assetPrefix}/_next/static/images/`,
                        outputPath: `${isServer ? '../' : ''}static/images/`,
                        name: '[name]-[hash].[ext]',
                        esModule: config.esModule || false
                    }
                }
            ]
        })
        return config
    }
})
