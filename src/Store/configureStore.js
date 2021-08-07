import { createStore, combineReducers } from 'redux'
import moviesReducer from '../Reducers/moviesReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        movies: moviesReducer
    }))
    return store
}

export default configureStore