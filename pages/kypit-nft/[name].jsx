/** @format */

import ItemPage from 'components/ItemPage/ItemPage'
import Head from 'next/head'
import { useRouter } from 'next/router'

const data = {
    artist: 'Anya',
    name: 'Connected',
    image: 'https://lh3.googleusercontent.com/bUXCoCysa9XI_T_ZSdWxa1rXkTgr8yMnehVyB3NApMr7E8cvDDmC82wJi8OgbyQ4OLxMS1gj7Pt1pI4Hd8uYym_LiwTspipNzp7D=w600'
}

function PageItem() {
    const url = process.env.domain + useRouter().asPath

    return (
        <>
            <Head>
                <title>{data.name} | NFT Music - купить NFT</title>
                <meta property='og:title' content={`${data.name} | NFT Music - купить NFT`} key='title' />
                <meta property='og:type' content='website' key='type' />
                <meta property='og:site_name' content='NFT Music' key='site_name' />
                <meta property='og:url' content={url} key='url' />
                <meta property='og:image' content={data.image} key='image' />
                <meta property='og:description' content={`Купить аудио NFT: ${data.name} - ${data.artist} | только на NFT Music`} key='description' />
                <meta property='description' content={`Купить аудио NFT: ${data.name} - ${data.artist} | только на NFT Music`} key='description' />
                <meta
                    property='keywords'
                    name='keywords'
                    content={`купить nft, купить нфт, купить nft ${data.name}, купить nft ${data.name} - ${data.artist}`}
                    key='keywords'
                />
                <link rel='canonical' href={url} />
            </Head>
            <ItemPage />
        </>
    )
}

export default PageItem
