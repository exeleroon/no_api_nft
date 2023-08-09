import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import AuthReducer from './auth-reducer'
import NftReducer from './nft-reducer'
import SearchReducer from './search-reducer'
import ArtistReducer from './artist-reducer'

let reducers = combineReducers({
    auth: AuthReducer,
    nft: NftReducer,
    artist: ArtistReducer,
    search: SearchReducer,
})

let composeEnhancers = compose

if (typeof window !== 'undefined') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store
