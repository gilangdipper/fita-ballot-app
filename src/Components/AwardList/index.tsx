import { FC, lazy, Suspense } from 'react'
import { IAwardList } from './interfaces'
import { AwardListWrapper } from './styles'

const MovieList = lazy(() => import('./MovieList'))

const AwardList: FC<IAwardList> = ({
  awardData,
  nominateMovie,
  movieNominated,
}) => {
  return (
    <AwardListWrapper>
      <Suspense fallback={<div>Page is Loading...</div>}>
        {awardData.map((award) => (
          <div key={award.id} className="award-section">
            <div className="title">{award.title}</div>
            <MovieList
              movies={award.items}
              onClick={(movieId) => nominateMovie(award.id, movieId)}
              movieIdSelected={movieNominated[award.id]}
            />
          </div>
        ))}
      </Suspense>
    </AwardListWrapper>
  )
}

export default AwardList
