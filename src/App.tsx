import { lazy, Suspense, useEffect, useState } from 'react'

import { getBallotData } from './services/ballot'

import { AppWrapper } from './App.style'
import { IAwardResponses, TMovieNominated } from './interfaces'

const AwardList = lazy(() => import('./Components/AwardList'))
const AwardModal = lazy(() => import('./Components/AwardModal'))

function App() {
  const [awardData, setAwardData] = useState<IAwardResponses['items']>([])
  const [movieNominated, setMovieNominated] = useState<
    Record<string, TMovieNominated>
  >({})
  const [isModalShow, setIsModalShow] = useState(false)
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
      <Suspense fallback={<div>Page is Loading...</div>}>
        <AwardList
          awardData={awardData}
          nominateMovie={(categoryId, movie) =>
            setMovieNominated((previousState) => ({
              ...previousState,
              [categoryId]: movie,
            }))
          }
          movieNominated={movieNominated}
          displayModal={() => setIsModalShow(true)}
        />
        <AwardModal
          isShow={isModalShow}
          closeModal={() => setIsModalShow(false)}
          movieNominated={movieNominated}
        />
      </Suspense>
    </AppWrapper>
  )
}

export default App
