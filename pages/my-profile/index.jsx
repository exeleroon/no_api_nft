/** @format */

import MyProfilePage from 'components/MyProfilePage/MyProfilePage'
import { useRouter } from 'next/router'
import Head from 'next/head'

function Profile() {
    const url = process.env.domain + useRouter().pathname

    return (
        <>
            <Head>
                <link rel='canonical' href={url} />
            </Head>
            <MyProfilePage />
        </>
    )
}

export default Profile
