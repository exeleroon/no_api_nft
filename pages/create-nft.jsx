/** @format */

import CreateNFTPage from 'components/CreateNFTPage/CreateNFTPage'
import { useRouter } from 'next/router'
import Head from 'next/head'

function CreateNft() {
    const url = process.env.domain + useRouter().pathname

    return (
        <>
            <Head>
                <link rel='canonical' href={url} />
            </Head>
            <CreateNFTPage />
        </>
    )
}

export default CreateNft
