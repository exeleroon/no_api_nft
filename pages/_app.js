/** @format */

import AppWrapper from 'AppWrapper'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import 'App.css'

function MyApp({ Component, pageProps }) {
    const router = useRouter()

    const handleRouteChange = url => {
        window.gtag('config', 'G-MVEJ8M0M4Q', {
            page_path: url
        })
    }

    useEffect(() => {
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return <AppWrapper pageProps={pageProps} Component={Component} />
}

export default MyApp
