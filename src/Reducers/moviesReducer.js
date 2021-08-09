import { ADD_NEW, DELETE } from '../Actions/moviesAction'
const intialValue = []

const moviesReducer = (state = intialValue, action) => {
    switch (action.type) {
        case ADD_NEW: {
            return [...state, action.payload]
        }
        case DELETE: {
            return state.filter((ele) => {
                return ele.id !== action.payload
            })
        }
        default: {
            return [...state]
        }
    }
}

export default moviesReducer