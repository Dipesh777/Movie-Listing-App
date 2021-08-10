import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const MovieStats = (props) => {

    const [topRanked, setTopRanked] = useState({})
    // movies Data
    const movies = useSelector((state) => {
        return state.movies
    })

    useEffect(() => {
        if (movies.length > 0) {

            const topRanked = movies.reduce((accumulator, current) => {
                return accumulator.rank < current.rank ? accumulator : current
            })
            console.log(topRanked)
            setTopRanked(topRanked)
        }
    }, [movies])


    return (
        <div className='border border-2 border-dark p-3 mt-3'>
            <h3>MovieStats</h3>
            <h5 className='px-4 py-1 mt-4'>Total Movies - {movies.length}</h5>
            <h5 className='px-4 py-1'>Top Ranked Movie -{topRanked.name}</h5>
        </div>
    )
}

export default MovieStats