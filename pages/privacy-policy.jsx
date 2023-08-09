/** @format */

import PrivacyPolicy from 'components/PrivacyPolicy/PrivacyPolicy'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Logo from '../public/assets/images/logos/mainIcon.png'

function Privacy() {
    const url = process.env.domain + useRouter().pathname

    return (
        <>
            <Head>
                <title>Политика конфиденциальности</title>
                <meta property='og:title' content={`Политика конфиденциальности`} key='title' />
                <meta property='og:type' content='website' key='type' />
                <meta property='og:site_name' content='NFT Music' key='site_name' />
                <meta property='og:url' content={url} key='url' />
                <meta property='og:image' content={process.env.domain + Logo.src} key='image' />
                <meta property='og:description' content={'Privacy policy, политика конфединциальности'} key='description' />
                <meta property='description' content={'Privacy policy, политика конфединциальности'} key='description' />
                <meta property='keywords' name='keywords' content={`купить nft, купить нфт, купить nft, купить nft`} key='keywords' />
                <link rel='canonical' href={url} />
            </Head>
            <PrivacyPolicy />
        </>
    )
}

export default Privacy
