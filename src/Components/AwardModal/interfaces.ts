import { TMovieNominated } from '../../interfaces'

export interface IAwardModal {
  isShow: boolean
  closeModal: () => void
  movieNominated: Record<string, TMovieNominated>
}
