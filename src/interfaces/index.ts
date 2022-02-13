export interface IMovie {
  title: string
  photoUrL: string
  id: string
}

export interface IAward {
  id: string
  items: IMovie[]
  title: string
}

export interface IAwardResponses {
  items: IAward[]
}
