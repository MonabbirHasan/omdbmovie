import { useEffect, useState } from 'react'
// 98e39da4
import './App.css'
import MovieCard from './MovieCard'
const API_URL = 'https://www.omdbapi.com?apikey=98e39da4'

const App = () => {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovie('Spiderman')
  }, [])

  return (
    <div className="app">
      <h1>Movie Land.</h1>

      <div className='search-box'>
        <input
        className='search'
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() => {
            searchMovie(search)
          }}
        >
          search
        </button>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div>
          <h1>no movie found</h1>
        </div>
      )}
    </div>
  )
}

export default App
