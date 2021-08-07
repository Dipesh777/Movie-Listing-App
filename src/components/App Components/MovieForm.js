import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux'
import { addMovie } from '../../Actions/moviesAction'

const MovieForm = (props) => {
    const dispatch = useDispatch()

    const [movieName, setMovieName] = useState('')
    const [movieRank, setMovieRank] = useState('')
    const [formError, setFormError] = useState({})
    const errors = {}

    // handling form input
    const handleInput = (event) => {
        const name = event.target.name
        if (name === 'name') {
            setMovieName(event.target.value)
        } else if (name === 'rank') {
            setMovieRank(event.target.value)
        }
    }

    const clientValidation = () => {
        if (movieName.length === 0) {
            errors.movie = 'Movie Name Cannot be Empty'
        }
        if (movieRank.length === 0) {
            errors.rank = 'Please Provide Movie Rank'
        }
    }

    // handling form submission
    const handleSubmit = (event) => {
        event.preventDefault()
        clientValidation()
        if (Object.keys(errors).length === 0) {
            setFormError({})
            const movieDetail = {
                id: uuidv4(),
                name: movieName,
                rank: Number(movieRank)
            }
            dispatch(addMovie(movieDetail))
            // reset
            setMovieName('')
            setMovieRank('')
        } else {
            setFormError(errors)
        }
    }

    return (
        <div className='my-5'>
            <h3>Add Movie</h3>
            <form onSubmit={handleSubmit}>
                {/* Movie Name */}
                <input type="text"
                    name='name'
                    value={movieName}
                    onChange={handleInput}
                    placeholder='Enter Movie Name'
                    className='form-control'
                />
                {formError.movie && <span className='text-danger'>{formError.movie}</span>}

                {/* Movie Rank */}
                <input type="text"
                    name='rank'
                    value={movieRank}
                    onChange={handleInput}
                    placeholder='IMDB Ranking'
                    className='form-control mt-3'
                />
                {formError.rank && <span className='text-danger'>{formError.rank}</span>}
                <br />

                {/* ADD button */}
                <input type="submit"
                    value='Add'
                    className='my-2'
                />
            </form>
        </div>
    )
}

export default MovieForm