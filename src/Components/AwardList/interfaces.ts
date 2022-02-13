import { IAwardResponses } from '../../interfaces'

export interface IAwardList {
  awardData: IAwardResponses['items']
  nominateMovie: (categoryId: string, movieId: string) => void
  movieNominated: Record<string, string>
}
