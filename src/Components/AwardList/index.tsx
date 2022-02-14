import { FC } from 'react'

import MovieList from './MovieList'

import { IAwardList } from './interfaces'
import { AwardListWrapper } from './styles'

const AwardList: FC<IAwardList> = ({
  awardData,
  nominateMovie,
  movieNominated,
  displayModal,
}) => {
  return (
    <AwardListWrapper>
      <div className="award-title">AWARDS {new Date().getFullYear()}</div>
      {awardData.map((award) => (
        <div key={award.id} className="award-section">
          <div className="title">{award.title}</div>
          <MovieList
            movies={award.items}
            onClick={(movie) =>
              nominateMovie(award.id, {
                awardTitle: award.title,
                movie,
              })
            }
            movieIdSelected={movieNominated[award.id]?.movie.id}
          />
        </div>
      ))}
      <button type="button" onClick={() => displayModal()}>
        Submit ballot
      </button>
    </AwardListWrapper>
  )
}

export default AwardList
