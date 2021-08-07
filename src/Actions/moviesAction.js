export const addMovie = (data) => {
    return {
        type: 'ADD_NEW',
        payload: data
    }
}

export const deleteItem = (id) => {
    return {
        type: 'DELETE',
        payload: id
    }
}