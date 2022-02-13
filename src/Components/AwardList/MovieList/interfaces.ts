import { IMovie } from '../../../interfaces'

export interface IMovieList {
  movies: IMovie[]
  onClick: (movieId: string) => void
  movieIdSelected: string
}
