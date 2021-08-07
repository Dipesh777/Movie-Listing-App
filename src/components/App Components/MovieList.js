import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'

const MovieList = (props) => {
    const [nameSearch, setNameSearch] = useState('')
    const [orderBy, setOrderBy] = useState('')
    const [movieList, setMovieList] = useState()

    // movie data from redux store
    const movies = useSelector((state) => {
        return state.movies
    })

    useEffect(() => {
        setMovieList([...movies])
    }, [movies])

    // controling search bar
    const handleSearch = (event) => {
        const input = event.target.value
        setNameSearch(input)

        // search functionality
        const result = movies.filter((ele) => {
            return ele.name.toLowerCase().includes(input)
        })
        setMovieList(result)
    }

    // orderBy handler
    const handleOrderBy = (event) => {
        const inputOption = event.target.value
        setOrderBy(inputOption)
        if (inputOption === 'acendingA_Z') {
            accendingAtoZ()
        } else if (inputOption === 'acendingRank') {
            accendingRank()
        } else if (inputOption === 'decendingA_Z') {
            decendingAtoZ()
        } else if (inputOption === 'decendingRank') {
            decendingRank()
        }

    }

    // shorting functionality
    const accendingAtoZ = () => {
        const acending = movies.sort((a, b) => {
            let front = a.name.toLowerCase()
            let back = b.name.toLowerCase()
            if (front < back) { return -1 }
            if (front > back) { return 1 }
            return 0

        })
        setMovieList(acending)
    }

    const decendingAtoZ = () => {
        const decending = movies.sort((a, b) => {
            let front = a.name.toLowerCase()
            let back = b.name.toLowerCase()
            if (front < back) { return 1 }
            if (front > back) { return -1 }
            return 0

        })
        setMovieList(decending)
    }

    const accendingRank = () => {
        const acending = movies.sort((a, b) => a.rank - b.rank)
        setMovieList(acending)
    }

    const decendingRank = () => {
        const decending = movies.sort((a, b) => b.rank - a.rank)
        setMovieList(decending)
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
                <select className='form-control' value={orderBy} onChange={handleOrderBy}>
                    <option value="">Order By</option>
                    <option value="acendingA_Z">Acending A to Z</option>
                    <option value="decendingA_Z">Decending A to Z</option>
                    <option value="acendingRank">Acending By Rank</option>
                    <option value="decendingRank">Decending By Rank</option>
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
                            {
                                movieList.map((ele) => {
                                    return (
                                        <div className='col-6 my-2' key={ele.id}>
                                            < MovieCard id={ele.id} movieName={ele.name} rank={ele.rank} />
                                        </div>
                                    )
                                })
                            }

                        </>
                    )
                }
            </div>
        </div>
    )
}

export default MovieList