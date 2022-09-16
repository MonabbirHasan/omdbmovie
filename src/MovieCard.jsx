import React from 'react'
import logo from './assets/spiderman.png'
import './App.css'
const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div className="box">
        <p>{movie.Year}</p>
      </div>
      <div className="box">
        <img
          className="img-fluid"
          src={movie.Poster !== 'N/A' ? movie.Poster : logo}
        />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h6>{movie.Title}</h6>
      </div>
    </div>
  )
}

export default MovieCard
