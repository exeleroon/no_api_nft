/** @format */

import TermsConditions from 'components/TermsConditions/TermsConditions'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Logo from '../public/assets/images/logos/mainIcon.png'

function TermsAndCond() {
    const url = process.env.domain + useRouter().pathname

    return (
        <>
            <Head>
                <title>Условия использования</title>
                <meta property='og:title' content={`Условия использования`} key='title' />
                <meta property='og:type' content='website' key='type' />
                <meta property='og:site_name' content='NFT Music' key='site_name' />
                <meta property='og:url' content={url} key='url' />
                <meta property='og:image' content={process.env.domain + Logo.src} key='image' />
                <meta property='og:description' content='Terms and Conditions, условия использования' key='description' />
                <meta property='description' content='Terms and Conditions, условия использования' key='description' />
                <meta property='keywords' name='keywords' content='купить nft, купить нфт, купить nft, купить nft' key='keywords' />
                <link rel='canonical' href={url} />
            </Head>
            <TermsConditions />
        </>
    )
}

export default TermsAndCond
