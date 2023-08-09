import { message } from 'antd';
import { useRouter } from 'next/router';
import { artistAPI } from '../api/api';

const SET_ITEMS = 'SET_ITEMS';
const SET_ITEM = 'SET_ITEM';
const SET_ITEMS_DATA_LOADING = 'SET_ITEMS_DATA_LOADING';

const initialState = {
    items: null,
    itemsLoading: true,
    totalCount: null,
    filteredCount: null,
    item: null,
    currentPage: 1,
    pageSize: '8',
    sortField: 'id',
    sortType: 'desc'
}

const ArtistReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ITEMS:
            return {
                ...state,
                items: action.payload
            };
        case SET_ITEM:
            return {
                ...state,
                item: action.payload
            };
        case SET_ITEMS_DATA_LOADING:
            return {
                ...state,
                itemsLoading: action.payload
            };
        default:
            return state;
    }
};


export const setItems = (data) => ({
    type: SET_ITEMS,
    payload: data
});

export const setItem = (data) => ({
    type: SET_ITEM,
    payload: data
});

export const setItemsDataLoading = (data) => ({
    type: SET_ITEMS_DATA_LOADING,
    payload: data
});



export const getArtist = (username) => {
    return async (dispatch) => {
        dispatch(setItemsDataLoading(true));
        try {
            const data = await artistAPI.getArtist(username)
            dispatch(setItem(data.data))
        } catch (error) {
            error.response?.data?.errors ? message.error(error.response.data.errors.join(', ')) : message.error('Произошла ошибка')
            console.log(error.response)
        } finally {
            // dispatch(setItemsDataLoading(false));
        }
    }
};


export default ArtistReducer;