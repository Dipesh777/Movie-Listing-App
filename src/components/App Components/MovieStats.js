import React from 'react'
import { useSelector } from 'react-redux'

const MovieStats = (props) => {
    // movies Data
    const movies = useSelector((state) => {
        return state.movies
    })
    return (
        <div className='border border-2 border-dark p-3 mt-3'>
            <h3>MovieStats</h3>
            <h5 className='px-4 py-1 mt-4'>Total Movies - {movies.length}</h5>
            <h5 className='px-4 py-1'>Top Ranked Movie</h5>
        </div>
    )
}

export default MovieStats