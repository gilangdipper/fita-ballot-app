import { FC } from 'react'

import { IMovieList } from './interfaces'
import { MovieListWrapper } from './styles'

export * from './interfaces'

const MovieList: FC<IMovieList> = ({ movies, onClick, movieIdSelected }) => {
  return (
    <MovieListWrapper>
      {movies.map((movie) => (
        <div key={movie.id} className="movie-box">
          <div
            className={`movie-card ${
              movie.id === movieIdSelected ? 'selected' : ''
            }`}
          >
            <div className="movie-title">{movie.title}</div>
            <img alt="movie" src={movie.photoUrL} />
            <button type="button" onClick={() => onClick(movie.id)}>
              Nominate!
            </button>
          </div>
        </div>
      ))}
    </MovieListWrapper>
  )
}

export default MovieList
