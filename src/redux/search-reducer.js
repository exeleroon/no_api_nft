const SEARCH_BY_ARTIST = 'SEARCH_BY_ARTIST';
const TOGGLE_MOBILE_MENU = 'TOGGLE_MOBILE_MENU';
const SEARCH_INPUT_TEXT = 'SEARCH_INPUT_TEXT';

const initialState = {
    searchByArtist: false,
    searchInputValue: null,
    isMobMenuOpen: false,
};


const SearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_BY_ARTIST:
            return {
                ...state,
                searchByArtist: action.payload
            };
        case TOGGLE_MOBILE_MENU:
            return {
                ...state,
                isMobMenuOpen: action.payload
            };
        case SEARCH_INPUT_TEXT:
            return {
                ...state,
                searchInputValue: action.payload
            };
        default:
            return state;
    }
};


export const searchByArtist = (data) => ({
    type: SEARCH_BY_ARTIST,
    payload: data
})

export const setSearchInputVal = (data) => ({
    type: SEARCH_INPUT_TEXT,
    payload: data
})

export const toggleMobMenu = (payload) => ({
    type: TOGGLE_MOBILE_MENU,
    payload
})



export default SearchReducer;
