/** @format */

import 'antd/dist/antd.css'
import { useEffect } from 'react'
// import { useMoralis } from 'react-moralis'
import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import { PageWrapper, Wpapper } from 'styled'
import { getProfile } from 'redux/auth-reducer'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { getMaticCurrency } from 'redux/nft-reducer'

const App = ({ Component, pageProps }) => {
    // const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading, user } = useMoralis()
    const dispatch = useDispatch()

    const url = useRouter().pathname
    // useEffect(() => {
    //     if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3()
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [isAuthenticated, isWeb3Enabled])

    useEffect(() => {
        if (url !== '/my-profile' && url !== '/my-profile/settings') {
            // dispatch(getProfile())
        }

        // dispatch(getMaticCurrency())

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Wpapper>
                <Header />
                <PageWrapper>
                    <Component {...pageProps} />
                </PageWrapper>
            </Wpapper>
            <Footer />
        </>
    )
}

export default App
