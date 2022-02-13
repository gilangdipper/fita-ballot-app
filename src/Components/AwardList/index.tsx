import { FC } from 'react'
import { IAwardList } from './interfaces'
import MovieList from './MovieList'
import { AwardListWrapper } from './styles'

const AwardList: FC<IAwardList> = ({ awardData }) => {
  return (
    <AwardListWrapper>
      {awardData.map((award) => (
        <div key={award.id} className="award-section">
          <div className="award-section_title">{award.title}</div>
          <MovieList movies={award.items} />
        </div>
      ))}
    </AwardListWrapper>
  )
}

export default AwardList
