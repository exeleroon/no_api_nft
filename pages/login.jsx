/** @format */

import LoginPage from 'components/LoginPage/LoginPage'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Logo from '../public/assets/images/logos/mainIcon.png'

function Login() {
    const url = process.env.domain + useRouter().pathname

    return (
        <>
            <Head>
                <title>Логин | NFT Music</title>
                <meta property='og:title' content={`Логин | NFT Music`} key='title' />
                <meta property='og:type' content='website' key='type' />
                <meta property='og:site_name' content='NFT Music' key='site_name' />
                <meta property='og:url' content={url} key='url' />
                <meta property='og:image' content={process.env.domain + Logo.src} key='image' />
                <meta
                    property='og:description'
                    content='Залогиниться на NFT Music - первом и крупнейшем NFT marketplace. Наш музыкальный маркетплейс позволяет купить и продать NFT по рыночной цене.'
                    key='description'
                />
                <meta
                    property='description'
                    content='Залогиниться на NFT Music - первом и крупнейшем NFT marketplace. Наш музыкальный маркетплейс позволяет купить и продать NFT по рыночной цене.'
                    key='description'
                />
                <meta property='keywords' name='keywords' content='логин, залогиниться, логин nft music' key='keywords' />
                <link rel='canonical' href={url} />
            </Head>
            <LoginPage />
        </>
    )
}

export default Login
