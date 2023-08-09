/** @format */

import MyProfileSettingsPage from 'components/MyProfileSettingsPage/MyProfileSettingsPage'
import { useRouter } from 'next/router'
import Head from 'next/head'

function Settings() {
    const url = process.env.domain + useRouter().pathname

    return (
        <>
            <Head>
                <link rel='canonical' href={url} />
            </Head>
            <MyProfileSettingsPage />
        </>
    )
}

export default Settings
