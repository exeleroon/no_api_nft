/** @format */

import * as fs from 'fs'
import { nftAPI } from '../src/api/api'

const Sitemap = () => {
    return null
}

export const getServerSideProps = ({res}) => {
    const staticPaths = fs
        .readdirSync('pages')
        .filter(staticPage => {
            return ![
                'api',
                '_app.js',
                '_document.js',
                'sitemap.xml.jsx',
                'artist',
                'kypit-nft',
                'my-profile',
                'create-nft.jsx',
                'privacy-policy.jsx',
                'terms-and-conditions.jsx',
                'reset-password',
                'forgot-password.jsx',
                'change-password.jsx'
            ].includes(staticPage)
        })
        .map(staticPagePath => {
            return `${process.env.domain}${staticPagePath.slice(0, -4) === 'index' ? '' : `/${staticPagePath.slice(0, -4)}`}`
        })

    const allNfts = nftAPI.getAllItems()

    const dynamicPathsNfts = allNfts.data.map(singleProduct => {
        return `${process.env.domain}/kypit-nft/${singleProduct.id}`
    })

    const allPaths = [...staticPaths, ...dynamicPathsNfts]

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${allPaths
              .map(url => {
                  return `
                <url>
                  <loc>${url}</loc>
                  <lastmod>${new Date().toISOString()}</lastmod>
                  <changefreq>monthly</changefreq>
                  <priority>1.0</priority>
                </url>
              `
              })
              .join('')}
        </urlset>
    `

    res.setHeader('Content-Type', 'text/xml')
    // res.write(sitemap)
    res.write(`<?xml version="1.0" encoding="UTF-8"?>
	<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
	<loc>https://nft-music.co/</loc>
	<lastmod>2022-02-19T13:14:47+01:00</lastmod>
</url>
<url>
	<loc>https://nft-music.co/search</loc>
	<lastmod>2022-02-19T13:14:47+01:00</lastmod>
</url>
<url>
	<loc>https://nft-music.co/kypit-nft-tokenu</loc>
	<lastmod>2022-02-19T13:14:47+01:00</lastmod>
</url>
<url>
	<loc>https://nft-music.co/signup</loc>
	<lastmod>2022-02-19T13:14:47+01:00</lastmod>
</url>
<url>
	<loc>https://nft-music.co/nft-audio</loc>
	<lastmod>2022-02-19T13:14:47+01:00</lastmod>
</url>
<url>
	<loc>https://nft-music.co/chto-takoe-nft-tokenu</loc>
	<lastmod>2022-02-19T13:14:47+01:00</lastmod>
</url>
<url>
	<loc>https://nft-music.co/how-to-create-nft</loc>
	<lastmod>2022-02-19T13:14:47+01:00</lastmod>
</url>
<url>
	<loc>https://nft-music.co/gde-kypit-nft-tokenu</loc>
	<lastmod>2022-02-19T13:14:47+01:00</lastmod>
</url>
<url>
	<loc>https://nft-music.co/login</loc>
	<lastmod>2022-02-19T13:14:47+01:00</lastmod>
</url>
<url>
	<loc>https://nft-music.co/kontaktu</loc>
	<lastmod>2022-02-19T13:14:47+01:00</lastmod>
</url>
<url>
	<loc>https://nft-music.co/kypit-nft/1644683535762</loc>
	<lastmod>2022-02-19T13:14:54+01:00</lastmod>
</url>
</urlset>`)
    res.end()

    return {
        props: {}
    }
}

export default Sitemap
