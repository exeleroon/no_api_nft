/** @format */

import WhatIsNFTToken from 'components/WhatIsNFTToken/WhatIsNFTToken'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Logo from '../public/assets/images/logos/mainIcon.png'

function WhatToken() {
    const url = process.env.domain + useRouter().pathname

    return (
        <>
            <Head>
                <title>Что такое NFT токены | NFT Music</title>
                <meta property='og:title' content={`Что такое NFT токены | NFT Music`} key='title' />
                <meta property='og:type' content='website' key='type' />
                <meta property='og:site_name' content='NFT Music' key='site_name' />
                <meta property='og:url' content={url} key='url' />
                <meta property='og:image' content={process.env.domain + Logo.src} key='image' />
                <meta
                    property='og:description'
                    content='Что такое NFT токены? Аббревиатура NFT (non-fungible tokens) означает «не взаимозаменяемый токен». NFT токен – это цифровой сертификат, прикрепленный к уникальному объекту.'
                    key='description'
                />
                <meta
                    property='description'
                    content='Что такое NFT токены? Аббревиатура NFT (non-fungible tokens) означает «не взаимозаменяемый токен». NFT токен – это цифровой сертификат, прикрепленный к уникальному объекту.'
                    key='description'
                />
                <meta
                    property='keywords'
                    name='keywords'
                    content='что такое nft, что такое nft токены, что такое nft токен, nft что это такое, nft что такое, nft token что это такое, Нфт, нфт токены, что такое нфт, нфт что это'
                    key='keywords'
                />
                <link rel='canonical' href={url} />
            </Head>
            <WhatIsNFTToken />
        </>
    )
}

export default WhatToken
