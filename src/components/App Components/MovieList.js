import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'

const MovieList = (props) => {
    const [nameSearch, setNameSearch] = useState('')
    const [searchMovie, setSearchMovie] = useState([])

    // movie data from redux store
    const movies = useSelector((state) => {
        return state.movies
    })

    // controling search bar
    const handleSearch = (event) => {
        const input = event.target.value
        setNameSearch(input)

        // search functionality
        const result = movies.filter((ele) => {
            return ele.name.toLowerCase().includes(input)
        })
        setSearchMovie(result)
    }

    return (
        <div>
            <form className='d-flex'>
                {/* search by name */}
                <input type="text"
                    value={nameSearch}
                    onChange={handleSearch}
                    placeholder='Search by name...'
                    className='mx-2 form-control' />

                {/* order by */}
                <select className='form-control'>
                    <option value="orderBy">Order By</option>
                    <option value="acendingA_Z">Acending A to Z</option>
                    <option value="acendingRank">Acending By Rank</option>
                </select>
            </form>

            {/* Listing Movies Cards */}
            <div className='row my-4'>
                {
                    movies.length === 0 ? (
                        <div>
                            <p>No Movies Available !</p>
                            <span>Add Movies To See Details</span>
                        </div>

                    ) : (
                        <>
                            {searchMovie.length > 0 ? (
                                searchMovie.map((ele) => {
                                    return (
                                        <div className='col-6 my-2' key={ele.id}>
                                            < MovieCard id={ele.id} movieName={ele.name} rank={ele.rank} />
                                        </div>
                                    )
                                })
                            ) : (
                                movies.map((ele) => {
                                    return (
                                        <div className='col-6 my-2' key={ele.id}>
                                            < MovieCard id={ele.id} movieName={ele.name} rank={ele.rank} />
                                        </div>
                                    )
                                })
                            )}
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default MovieList