/** @format */

import BuyNFTToken from 'components/BuyNFTToken/BuyNFTToken'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Logo from '../public/assets/images/logos/mainIcon.png'

function BuyToken() {
    const url = process.env.domain + useRouter().pathname

    return (
        <>
            <Head>
                <title>Купить NFT токены | NFT Music</title>
                <meta property='og:title' content={`Купить NFT токены | NFT Music`} key='title' />
                <meta property='og:type' content='website' key='type' />
                <meta property='og:site_name' content='NFT Music' key='site_name' />
                <meta property='og:url' content={url} key='url' />
                <meta property='og:image' content={process.env.domain + Logo.src} key='image' />
                <meta
                    property='og:description'
                    content='Купить NFT токены. Покупка NFT токенов раньше была сложным и длительным процессом, но теперь благодаря NFT Music купить токены не составит труда.'
                    key='description'
                />
                <meta
                    property='description'
                    content='Купить NFT токены. Покупка NFT токенов раньше была сложным и длительным процессом, но теперь благодаря NFT Music купить токены не составит труда.'
                    key='description'
                />
                <meta
                    property='keywords'
                    name='keywords'
                    content='купить nft, купить нфт, купить nft токены, как купить nft, nft цена, нфт цена, nft цены'
                    key='keywords'
                />
                <link rel='canonical' href={url} />
            </Head>
            <BuyNFTToken />
        </>
    )
}

export default BuyToken
