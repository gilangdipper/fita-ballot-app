import { useEffect, useState } from 'react'

import { getBallotData } from './services/ballot'

import AwardList from './components/AwardList'
import AwardModal from './components/AwardModal'

import { AppWrapper } from './App.style'
import { IAwardResponses, TMovieNominated } from './interfaces'

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
    </AppWrapper>
  )
}

export default App
