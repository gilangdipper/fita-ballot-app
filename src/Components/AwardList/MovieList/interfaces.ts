import { IMovie, TMovieNominated } from '../../../interfaces'

export interface IMovieList {
  movies: IMovie[]
  onClick: (movie: TMovieNominated['movie']) => void
  movieIdSelected?: string
}
