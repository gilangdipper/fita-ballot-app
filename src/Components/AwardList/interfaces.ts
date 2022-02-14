import { IAwardResponses, TMovieNominated } from '../../interfaces'

export interface IAwardList {
  awardData: IAwardResponses['items']
  nominateMovie: (categoryId: string, movieNominated: TMovieNominated) => void
  movieNominated: Record<string, TMovieNominated>
  displayModal: () => void
}
