/** @format */

import { message } from 'antd'
import { nftAPI } from '../api/api'
// import history from '../history';

const SET_ITEMS = 'SET_ITEMS'
const SET_ITEM = 'SET_ITEM'
const SET_ITEMS_DATA_LOADING = 'SET_ITEMS_DATA_LOADING'
const SET_FEATURE_ITEM = 'SET_FEATURE_ITEM'
const SET_MOST_POPULAR_ITEMS = 'SET_MOST_POPULAR_ITEMS'
const SET_TOP_ARTISTS = 'SET_TOP_ARTISTS'
const SET_AVAILABLE_TOKENS_LOADING = 'SET_AVAILABLE_TOKENS_LOADING'
const SET_AVAILABLE_TOKENS = 'SET_AVAILABLE_TOKENS'
const SET_MATIC_CURRENCY = 'SET_MATIC_CURRENCY'

const initialState = {
    items: null,
    itemsLoading: true,
    totalCount: null,
    filteredCount: null,
    item: null,
    currentPage: 1,
    pageSize: '8',
    sortField: 'id',
    sortType: 'desc',
    availableTokensLoading: true,
    availableTokens: null,
    maticCurrency: null,
    featureItem: {
        name: 'No name',
        image: 'https://lh3.googleusercontent.com/arZp0k6bZZRcaZg0bepv5f7g0IzG04xoqYHymQSRj1emlUSGEZ5rkMdRdDnlaRyDxPBU3h-uuewAexFbQ3eFE3Dxt1OnOfw5HvCklQ=w375',
        profileLink: 'Bored Ape Metaverse Original',
        tokenName: 'adidas for Prada re-source LIMITED EDITION',
        currentPrice: '0.02',
        lastPrice: '0.001',
        likes: '41',
        artist: 'Prada re-source LIMITED',
        isVerified: true,
        currentPriceUsd: '$650.16',
        buyIcon: 'link'
    },
    mostPopularItems: [
        {
            image: 'https://lh3.googleusercontent.com/cNHN-Vj9TRIfwo30sqsbZlwz__psgA0HGlifGCHc7i3MnXArFH6sLIbhb46TrHrjJw3WzE7P1cLG44T46Yo7YqpbPnJpWCz_gxOP=w375',
            profileLink: 'Bored Ape Metaverse Original',
            isVerified: true,
            tokenName: 'adidas for Prada re-source LIMITED EDITION',
            currentPrice: '0.72',
            lastPrice: '0.001',
            likes: '411',
            currentPriceUsd: '$650.16',
        },
        {
            image: 'https://lh3.googleusercontent.com/arZp0k6bZZRcaZg0bepv5f7g0IzG04xoqYHymQSRj1emlUSGEZ5rkMdRdDnlaRyDxPBU3h-uuewAexFbQ3eFE3Dxt1OnOfw5HvCklQ=w375',
            profileLink: 'Bored Ape Metaverse Original',
            tokenName: 'adidas for Prada re-source LIMITED EDITION',
            currentPrice: '0.092',
            isVerified: false,
            currentPriceUsd: '$650.16',
            lastPrice: '0.001',
            likes: '41',
        },
        {
            image: 'https://lh3.googleusercontent.com/HCFtJApW1-miVtKXoAEbXJmDmndphQlpzvwITb4x8jY5pZQ_Ihi8nwzp0aY3AExtT4Cr-Qp4FMpble9wJexdsxDkLxn5WhIHIM1Qxw=w375',
            profileLink: 'Bored Ape Metaverse Original',
            tokenName: 'adidas for Prada re-source LIMITED EDITION',
            currentPrice: '0.02',
            lastPrice: '0.001',
            likes: '41',
            isVerified: false,
            currentPriceUsd: '$650.16',
        }
    ],
    topArtistsItems:  [
        {
            name: 'Azuki',
            avatar: '/random_nft.jpg',
            trackCount: 1345,
            additionalInfo: 'Доп инфа'
        },
        {
            name: 'Bored Ape Yacht Club',
            avatar: '/random_nft.jpg',
            trackCount: 278,
            additionalInfo: 'Доп инфа'
        },
        {
            name: 'The Sandbox',
            avatar: '/random_nft.jpg',
            trackCount: 77,
            additionalInfo: 'Доп инфа'
        },
        {
            name: 'CLONE X - X TAKASHI MURAKAMI',
            avatar: '/random_nft.jpg',
            trackCount: 2,
            additionalInfo: 'Доп инфа'
        },
        {
            name: 'FOMO MOFOS',
            avatar: '/random_nft.jpg',
            trackCount: 47,
            additionalInfo: 'Доп инфа'
        },
        {
            name: 'C-01 Official Collection',
            avatar: '/random_nft.jpg',
            trackCount: 55,
            additionalInfo: 'Доп инфа'
        },
        {
            name: 'CryptoBatz by Ozzy Osbourne',
            avatar: '/random_nft.jpg',
            trackCount: 23,
            additionalInfo: 'Доп инфа'
        },
        {
            name: 'Azuki',
            avatar: '/random_nft.jpg',
            trackCount: 244,
            additionalInfo: 'Доп инфа'
        },
        {
            name: 'Bored Ape Yacht Club',
            avatar: '/random_nft.jpg',
            trackCount: 12,
            additionalInfo: 'Доп инфа'
        }
    ]
}

const NftReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ITEMS:
            return {
                ...state,
                items: action.payload
            }
        case SET_ITEM:
            return {
                ...state,
                item: action.payload
            }
        case SET_ITEMS_DATA_LOADING:
            return {
                ...state,
                itemsLoading: action.payload
            }
        case SET_AVAILABLE_TOKENS_LOADING:
            return {
                ...state,
                availableTokensLoading: action.payload
            }
        case SET_FEATURE_ITEM:
            return {
                ...state,
                featureItem: action.payload
            }
        case SET_MOST_POPULAR_ITEMS:
            return {
                ...state,
                mostPopularItems: action.payload
            }
        case SET_TOP_ARTISTS:
            return {
                ...state,
                topArtistsItems: action.payload
            }
        case SET_AVAILABLE_TOKENS:
            return {
                ...state,
                availableTokens: action.payload
            }
        case SET_MATIC_CURRENCY:
            return {
                ...state,
                maticCurrency: action.payload
            }
        default:
            return state
    }
}

// export const setLoginFormLoading = (val) => ({ type: SET_LOGIN_FORM_LOADING, val });

export const setItems = data => ({
    type: SET_ITEMS,
    payload: data
})

export const setItem = data => ({
    type: SET_ITEM,
    payload: data
})

export const setItemsDataLoading = data => ({
    type: SET_ITEMS_DATA_LOADING,
    payload: data
})

// export const setIsAuth = (data) => ({
//     type: SET_IS_AUTH,
//     payload: data
// })

export const setFeatureItem = data => ({
    type: SET_FEATURE_ITEM,
    payload: data
})

export const setMostPopularItems = data => ({
    type: SET_MOST_POPULAR_ITEMS,
    payload: data
})

export const setTopArtistsItems = data => ({
    type: SET_TOP_ARTISTS,
    payload: data
})

const setAvailableTokensLoading = data => ({
    type: SET_AVAILABLE_TOKENS_LOADING,
    payload: data
})

const setAvailableTokens = data => ({
    type: SET_AVAILABLE_TOKENS,
    payload: data
})

const setMaticCurrency = data => ({
    type: SET_MATIC_CURRENCY,
    payload: data
})

export const getFeatureItem = () => {
    return async dispatch => {
        dispatch(setItemsDataLoading(true))

        try {
            const data = await nftAPI.getFeatureItem()
            dispatch(setFeatureItem(data.data))
        } catch (error) {
            error.response?.data?.errors ? message.error(error.response.data.errors.join(', ')) : message.error('Произошла ошибка')

            console.log(error.response)
        } finally {
            dispatch(setItemsDataLoading(false))
        }
    }
}

export const getMostPopularItems = () => {
    return async dispatch => {
        dispatch(setItemsDataLoading(true))

        try {
            const data = await nftAPI.getMostPopularItems()
            dispatch(setMostPopularItems(data.data))
        } catch (error) {
            error.response?.data?.errors ? message.error(error.response.data.errors.join(', ')) : message.error('Произошла ошибка')

            console.log(error.response)
        } finally {
            dispatch(setItemsDataLoading(false))
        }
    }
}

export const getTopArtistsItems = () => {
    return async dispatch => {
        // dispatch(setItemsDataLoading(true));
        try {
            const data = await nftAPI.getTopArtists(data)
            dispatch(setTopArtistsItems(data.data))
        } catch (error) {
            error.response?.data?.errors ? message.error(error.response.data.errors.join(', ')) : message.error('Произошла ошибка')
            console.log(error.response)
        } finally {
            // dispatch(setItemsDataLoading(false));
        }
    }
}

export const getHomepageItemsData = () => {
    return async dispatch => {
        dispatch(setItemsDataLoading(true))

        try {
            dispatch(getFeatureItem())
            dispatch(getMostPopularItems())
            dispatch(getTopArtistsItems())
            // const promise1 = dispatch(getFeatureItem())
            // const promise2 = dispatch(getMostPopularItems())
            // const promise3 = dispatch(getTopArtistsItems());
            // await Promise.all([promise1, promise2, promise3])
        } catch (error) {
            error.response?.data?.errors ? message.error(error.response.data.errors.join(', ')) : message.error('Произошла ошибка')

            console.log(error.response)
        } finally {
            dispatch(setItemsDataLoading(false))
        }
    }
}

export const getAvailableTokens = () => {
    return async dispatch => {
        dispatch(setAvailableTokensLoading(true))

        try {
            const data = await nftAPI.getAvailableTokensRoute()
            dispatch(setAvailableTokens(data.data))
        } catch (error) {
            error.response?.data?.errors ? message.error(error.response.data.errors.join(', ')) : message.error('Произошла ошибка')

            console.log(error.response)
        } finally {
            dispatch(setAvailableTokensLoading(false))
        }
    }
}

export const getNFT = id => {
    return async dispatch => {
        dispatch(setItemsDataLoading(true))

        try {
            const data = await nftAPI.getItem(id)
            dispatch(setItem(data.data))
        } catch (error) {
            error.response?.data?.errors ? message.error(error.response.data.errors.join(', ')) : message.error('Произошла ошибка')

            console.log(error.response)
        } finally {
            dispatch(setItemsDataLoading(false))
        }
    }
}

export const getAllItems = formValues => {
    return async dispatch => {
        dispatch(setItemsDataLoading(true))

        try {
            const data = await nftAPI.getAllItems(formValues)
            dispatch(setItems(data.data))
        } catch (error) {
            error.response?.data?.errors ? message.error(error.response.data.errors.join(', ')) : message.error('Произошла ошибка')

            console.log(error.response)
        } finally {
            dispatch(setItemsDataLoading(false))
        }
    }
}

export const getAllItemsByCreator = formValues => {
    return async dispatch => {
        dispatch(setItemsDataLoading(true))

        try {
            const data = await nftAPI.getItemsByCreator(formValues)
            dispatch(setItems(data.data))
        } catch (error) {
            error.response?.data?.errors ? message.error(error.response.data.errors.join(', ')) : message.error('Произошла ошибка')

            console.log(error.response)
        } finally {
            dispatch(setItemsDataLoading(false))
        }
    }
}

export const getAllItemsByOwner = formValues => {
    return async dispatch => {
        dispatch(setItemsDataLoading(true))

        try {
            const data = await nftAPI.getItemsByOwner(formValues)
            dispatch(setItems(data.data))
        } catch (error) {
            error.response?.data?.errors ? message.error(error.response.data.errors.join(', ')) : message.error('Произошла ошибка')

            console.log(error.response)
        } finally {
            dispatch(setItemsDataLoading(false))
        }
    }
}

export const getMaticCurrency = () => {
    return async dispatch => {
        // dispatch(setItemsDataLoading(true));

        try {
            let data = await fetch('https://min-api.cryptocompare.com/data/price?fsym=MATIC&tsyms=USD')
            data = await data.json()
            dispatch(setMaticCurrency(data.USD))
        } catch (error) {
            error.response?.data?.errors ? message.error(error.response.data.errors.join(', ')) : message.error('Произошла ошибка')

            console.log(error.response)
        } finally {
            // dispatch(setItemsDataLoading(false));
        }
    }
}

export default NftReducer
