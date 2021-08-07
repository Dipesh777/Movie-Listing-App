import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteItem } from '../../Actions/moviesAction'

const MovieCard = (props) => {
    const dispatch = useDispatch()
    const { id, movieName, rank } = props

    const handleDelete = (id) => {
        const confirm = window.confirm('Are you Sure ?')
        if (confirm) {
            dispatch(deleteItem(id))
        }
    }

    return (
        <div className='card'>
            <div className="card-body d-flex">
                <img src="logo192.png" alt="moviePoster" />
                <div>
                    <h5 className="card-title">{movieName}</h5>
                    <p className="card-text"># {rank}</p>
                    <button className='btn btn-danger' onClick={() => handleDelete(id)}>Delete</button>
                </div>

            </div>
        </div>
    )
}

export default MovieCard