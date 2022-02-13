import { FC } from 'react'

import { IMovieList } from './interfaces'
import { MovieListWrapper } from './styles'

const MovieList: FC<IMovieList> = ({ movies }) => {
  return (
    <MovieListWrapper>
      {movies.map((movie) => (
        <div key={movie.id} className="movie-box">
          <div className="movie-box_title">{movie.title}</div>
        </div>
      ))}
    </MovieListWrapper>
  )
}

export default MovieList
