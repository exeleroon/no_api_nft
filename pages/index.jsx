/** @format */

import Homepage from 'components/Homepage/Homepage'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Logo from '../public/assets/images/logos/mainIcon.png'

function Home() {
    const url = process.env.domain + useRouter().pathname

    return (
        <>
            <Head>
                <title>NFT Music - первый и крупнейший NFT аудио маркетплейс</title>
                <meta property='og:title' content={`NFT Music - первый и крупнейший NFT аудио маркетплейс`} key='title' />
                <meta property='og:type' content='website' key='type' />
                <meta property='og:site_name' content='NFT Music' key='site_name' />
                <meta property='og:url' content={url} key='url' />
                <meta property='og:image' content={process.env.domain + Logo.src} key='image' />
                <meta
                    property='og:description'
                    content='NFT Music - первый и крупнейший NFT marketplace. Наш музыкальный маркетплейс позволяет купить и продать NFT по рыночной цене.'
                    key='description'
                />
                <meta
                    property='description'
                    content='NFT Music - первый и крупнейший NFT marketplace. Наш музыкальный маркетплейс позволяет купить и продать NFT по рыночной цене.'
                    key='description'
                />
                <meta
                    property='keywords'
                    name='keywords'
                    content='nft, нфт, купить nft, купить нфт, nft marketplace, nft маркетплейс, nft музыка, nft music'
                    key='keywords'
                />
                <link rel='canonical' href={url} />
            </Head>
            <Homepage />
        </>
    )
}

export default Home
