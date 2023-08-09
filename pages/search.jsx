/** @format */

import SearchPage from 'components/SearchPage/SearchPage'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Logo from '../public/assets/images/logos/mainIcon.png'

function Search() {
    const url = process.env.domain + useRouter().pathname

    return (
        <>
            <Head>
                <title>Поиск NFT | NFT Music</title>
                <meta property='og:title' content={`Поиск NFT | NFT Music`} key='title' />
                <meta property='og:type' content='website' key='type' />
                <meta property='og:site_name' content='NFT Music' key='site_name' />
                <meta property='og:url' content={url} key='url' />
                <meta property='og:image' content={process.env.domain + Logo.src} key='image' />
                <meta
                    property='og:description'
                    content='Поиск музыкальных NFT - самый большой выбор аудио NFT. Поиск по названию записи, исполнителю, цене NFT и возможность купить NFT. Все это только на NFT Music'
                    key='description'
                />
                <meta
                    property='description'
                    content='Поиск музыкальных NFT - самый большой выбор аудио NFT. Поиск по названию записи, исполнителю, цене NFT и возможность купить NFT. Все это только на NFT Music'
                    key='description'
                />
                <meta property='keywords' name='keywords' content='поиск NFT, найти NFT, аудио NFT, музыкальные NFT' key='keywords' key='keywords' />
                <link rel='canonical' href={url} />
            </Head>
            <SearchPage />
        </>
    )
}

export default Search
