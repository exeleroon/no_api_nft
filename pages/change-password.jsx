/** @format */

import ChangePassword from 'components/ChangePassword/ChangePassword'
import Head from 'next/head'
import Logo from '../public/assets/images/logos/mainIcon.png'
import { useRouter } from 'next/router'

function ChangePass() {
    const url = process.env.domain + useRouter().pathname

    return (
        <>
             <Head>
                <title>Изменить пароль | NFT Music</title>
                <meta property='og:title' content={`Изменить пароль | NFT Music`} key='title' />
                <meta property='og:type' content='website' key='type' />
                <meta property='og:site_name' content='NFT Music' key='site_name' />
                <meta property='og:url' content={url} key='url' />
                <meta property='og:image' content={process.env.domain + Logo.src} key='image' />
                <meta
                    property='og:description'
                    content='Изменить пароль на NFT Music - первом и крупнейшем NFT marketplace. Наш музыкальный маркетплейс позволяет купить и продать NFT по рыночной цене.'
                    key='description'
                />
                <meta
                    property='description'
                    content='Изменить пароль на NFT Music - первом и крупнейшем NFT marketplace. Наш музыкальный маркетплейс позволяет купить и продать NFT по рыночной цене.'
                    key='description'
                />
                <meta property='keywords' name='keywords' content='Изменить, изменить пароль, изменить nft music' key='keywords' />
                <link rel='canonical' href={url} />
            </Head>
            <ChangePassword />
        </>
    )
}

export default ChangePass
