/** @format */

import { useRouter } from 'next/router'
import Head from 'next/head'
import Logo from '../public/assets/images/logos/mainIcon.png'
import AudioNFT from 'components/AudioNFT/AudioNFT'

function NFTAudio() {
    const url = process.env.domain + useRouter().pathname

    return (
        <>
            <Head>
                <title>Что такое Аудио NFT и как его использовать | NFT Music</title>
                <meta property='og:title' content={`Что такое Аудио NFT и как его использовать | NFT Music`} key='title' />
                <meta property='og:type' content='website' key='type' />
                <meta property='og:site_name' content='NFT Music' key='site_name' />
                <meta property='og:url' content={url} key='url' />
                <meta property='og:image' content={process.env.domain + Logo.src} key='image' />
                <meta
                    property='og:description'
                    content={
                        'Используйте NFT Music, чтобы легко создавать NFT для вашего аудиоконтента. Просто создайте или загрузите свой аудиофайл и одним щелчком мыши создайте свое аудио NFT. Посетите страницу, чтобы узнать больше о том, что такое аудио NFT или как их создать.'
                    }
                    key='description'
                />
                <meta
                    property='description'
                    content={
                        'Используйте NFT Music, чтобы легко создавать NFT для вашего аудиоконтента. Просто создайте или загрузите свой аудиофайл и одним щелчком мыши создайте свое аудио NFT. Посетите страницу, чтобы узнать больше о том, что такое аудио NFT или как их создать.'
                    }
                    key='description'
                />
                <meta property='keywords' name='keywords' content={`nft аудио, nft audio, nft music, nft музыка`} key='keywords' />
                <link rel='canonical' href={url} />
            </Head>
            <AudioNFT />
        </>
    )
}

export default NFTAudio
