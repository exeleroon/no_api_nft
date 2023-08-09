/** @format */

import Contacts from 'components/Contacts/Contacts'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Logo from '../public/assets/images/logos/mainIcon.png'

function Contact() {
    const url = process.env.domain + useRouter().pathname

    return (
        <>
            <Head>
                <title>Контакты | NFT Music</title>
                <meta property='og:title' content={`Контакты | NFT Music`} key='title' />
                <meta property='og:type' content='website' key='type' />
                <meta property='og:site_name' content='NFT Music' key='site_name' />
                <meta property='og:url' content={url} key='url' />
                <meta property='og:image' content={process.env.domain + Logo.src} key='image' />
                <meta
                    property='og:description'
                    content='Контакты NFT Music. Связаться с NFT Music. NFT Music - первый и крупнейший NFT аудио-маркетплейс.'
                    key='description'
                />
                <meta
                    property='description'
                    content='Контакты NFT Music. Связаться с NFT Music. NFT Music - первый и крупнейший NFT аудио-маркетплейс.'
                    key='description'
                />
                <meta property='keywords' name='keywords' content='контакты nft music, связаться с nft music, nft music, nft, нфт' key='keywords' />
                <link rel='canonical' href={url} />
            </Head>
            <Contacts />
        </>
    )
}

export default Contact
