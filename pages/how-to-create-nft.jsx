/** @format */

import HowToCreateNFT from 'components/HowToCreateNFT/HowToCreateNFT'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Logo from '../public/assets/images/logos/mainIcon.png'

function HowCreateNFT() {
    const url = process.env.domain + useRouter().pathname

    return (
        <>
            <Head>
                <title>Как создать NFT | NFT Music</title>
                <meta property='og:title' content={`Как создать NFT | NFT Music`} key='title' />
                <meta property='og:type' content='website' key='type' />
                <meta property='og:site_name' content='NFT Music' key='site_name' />
                <meta property='og:url' content={url} key='url' />
                <meta property='og:image' content={process.env.domain + Logo.src} key='image' />
                <meta
                    property='og:description'
                    content='Создание NFT токенов всегда было трудоемким и времязатратным занятием, но сейчас благодаря NFT Music сделать токены не составит труда. Прежде всего, естественно, Вам будет нужен сам объект, к которому будет привязан токен. И конкретно от его уникальности и эксклюзивности зависит итоговая стоимость NFT.'
                    key='description'
                />
                <meta
                    property='description'
                    content='Создание NFT токенов всегда было трудоемким и времязатратным занятием, но сейчас благодаря NFT Music сделать токены не составит труда. Прежде всего, естественно, Вам будет нужен сам объект, к которому будет привязан токен. И конкретно от его уникальности и эксклюзивности зависит итоговая стоимость NFT.'
                    key='description'
                />
                <meta
                    property='keywords'
                    name='keywords'
                    content='создать nft, создать нфт, как создать nft, как создать нфт, создание nft, создать аудио nft, создать nft токен'
                    key='keywords'
                />
                <link rel='canonical' href={url} />
            </Head>
            <HowToCreateNFT />
        </>
    )
}

export default HowCreateNFT
