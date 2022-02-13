import { FC } from 'react'

import { IMovieList } from './interfaces'
import { MovieListWrapper } from './styles'

const MovieList: FC<IMovieList> = ({ movies }) => {
  return (
    <MovieListWrapper>
      {movies.map((movie) => (
        <div key={movie.id} className="movie-box">
          <div className="movie-card">
            <div className="movie-title">{movie.title}</div>
            <img alt="movie" src={movie.photoUrL} />
            <button type="button">Nominate!</button>
          </div>
        </div>
      ))}
    </MovieListWrapper>
  )
}

export default MovieList
