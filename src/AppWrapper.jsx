/** @format */

import React from 'react'
import App from './App'
import { Provider } from 'react-redux';
import store from './redux/store';
import { MoralisProvider } from 'react-moralis';

// const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID
// const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL
const APP_ID = 'WCp7Lohrep7ThSd1256eSy2LzsSCHAMjBhD7d8fV'
const SERVER_URL = 'https://9jqhwjlyigoc.usemoralis.com:2053/server'

const AppWrapepr = ({ Component, pageProps }) => {
    return (
        <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
            <Provider store={store}>
                <App pageProps={pageProps} Component={Component} />    
            </Provider>
        </MoralisProvider>
    )
}

export default AppWrapepr
