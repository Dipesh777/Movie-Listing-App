export const ADD_NEW = 'ADD_NEW'
export const DELETE = 'DELETE'


export const addMovie = (data) => {
    return {
        type: ADD_NEW,
        payload: data
    }
}

export const deleteItem = (id) => {
    return {
        type: DELETE,
        payload: id
    }
}