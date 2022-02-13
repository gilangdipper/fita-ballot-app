import { IAwardResponses } from '../interfaces'

export const getBallotData = (): Promise<IAwardResponses> => {
  return fetch('/api/getBallotData').then((res) => {
    return res.json()
  })
}
