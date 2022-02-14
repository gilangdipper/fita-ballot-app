import { shallow, ShallowWrapper } from 'enzyme'

import MovieList, { IMovieList } from '.'

describe('Movie List', () => {
  const props: IMovieList = {
    movies: [],
    onClick: () => {},
    movieIdSelected: '',
  }
  const movieList = (addProps?: Partial<IMovieList>): ShallowWrapper =>
    shallow(<MovieList {...props} {...addProps} />)

  test('Should render movie list properly', () => {
    expect(movieList().find('.movie-box').exists()).toBe(false)

    const movies = [
      {
        title: 'Chloé Zhao for Nomadland',
        photoUrL:
          'https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg',
        id: 'chloe-zhao',
      },
      {
        title: 'Aaron Sorkin for The Trial of the Chicago 7',
        photoUrL:
          'https://variety.com/wp-content/uploads/2020/12/trial_of_the_chicago_seven.jpg',
        id: 'aaron-sorkin',
      },
      {
        title: 'Lee Isaac Chung for Minari',
        photoUrL: 'https://variety.com/wp-content/uploads/2020/12/Minari.jpg',
        id: 'lee-isaac-chung',
      },
      {
        title: 'David Fincher for Mank',
        photoUrL: 'https://variety.com/wp-content/uploads/2020/12/mank.jpg',
        id: 'david-fincher',
      },
      {
        title: 'Regina King for One Night in Miami',
        photoUrL:
          'https://variety.com/wp-content/uploads/2020/12/one_night_in_miami.jpg',
        id: 'regina-king',
      },
    ]

    expect(movieList({ movies }).find('.movie-box')).toHaveLength(5)
  })

  test('Should execute onClick func when click close buttonr', () => {
    const onClickFunction = jest.fn()
    const movieListComp = movieList({
      onClick: onClickFunction,
      movies: [
        {
          title: 'Chloé Zhao for Nomadland',
          photoUrL:
            'https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg',
          id: 'chloe-zhao',
        },
      ],
    })
    movieListComp.find('.movie-box').find('button').at(0).simulate('click')
    expect(onClickFunction).toBeCalled()
  })
})
