import { useEffect, useState } from 'react'

import { getBallotData } from './services/ballot'
import AwardList from './components/AwardList'

import { AppWrapper } from './App.style'
import { IAwardResponses } from './interfaces'

function App() {
  const [awardData, setAwardData] = useState<IAwardResponses['items']>([])
  const [movieNominated, setMovieNominated] = useState<Record<string, string>>(
    {},
  )
  useEffect(() => {
    let isMounted = true

    getBallotData().then((data) => {
      if (isMounted) {
        setAwardData(data.items)
      }
    })

    return () => {
      isMounted = false
    }
  }, [])
  return (
    <AppWrapper>
      <AwardList
        awardData={awardData}
        nominateMovie={(categoryId, movieId) =>
          setMovieNominated((previousState) => ({
            ...previousState,
            [categoryId]: movieId,
          }))
        }
        movieNominated={movieNominated}
      />
    </AppWrapper>
  )
}

export default App
