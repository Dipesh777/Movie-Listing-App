import React from 'react'
import MovieList from './MovieList'
import MovieForm from './MovieForm'
import MovieStats from './MovieStats'

const MovieContainer = (props) => {
    return (
        <div className='d-flex justify-content-around container my-4'>
            <div style={{width:'700px'}}>
                <h1 className='text-capitalize mb-5'>my big movie list</h1>
                <MovieList />
            </div>
            <div className='m-4 p-4' style={{width:'400px'}}>
                <MovieForm />
                <MovieStats />
            </div >
        </div >
    )
}

export default MovieContainer