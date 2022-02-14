import { shallow, ShallowWrapper } from 'enzyme'

import AwardList from '.'
import { IAwardList } from './interfaces'
import { AwardListWrapper } from './styles'

describe('Award List', () => {
  const props: IAwardList = {
    awardData: [],
    nominateMovie: () => {},
    movieNominated: {},
    displayModal: () => {},
  }
  const awardList = (addProps?: Partial<IAwardList>): ShallowWrapper =>
    shallow(<AwardList {...props} {...addProps} />)

  test('Should render Award modal properly', () => {
    expect(awardList().find('.award-section').exists()).toBe(false)

    const awardData = [
      {
        id: 'best-picture',
        items: [
          {
            title: 'Nomadland',
            photoUrL:
              'https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg',
            id: 'nomadland',
          },
          {
            title: 'The Trial of the Chicago 7',
            photoUrL:
              'https://variety.com/wp-content/uploads/2020/12/trial_of_the_chicago_seven.jpg',
            id: 'the-trial-of-the-chicago-7',
          },
          {
            title: 'Minari',
            photoUrL:
              'https://variety.com/wp-content/uploads/2020/12/Minari.jpg',
            id: 'minari',
          },
          {
            title: 'Mank',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/mank.jpg',
            id: 'mank',
          },
          {
            title: 'One Night in Miami',
            photoUrL:
              'https://variety.com/wp-content/uploads/2020/12/one_night_in_miami.jpg',
            id: 'one-night-in-miami',
          },
        ],
        title: 'Best Picture',
      },
      {
        id: 'best-director',
        items: [
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
            photoUrL:
              'https://variety.com/wp-content/uploads/2020/12/Minari.jpg',
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
        ],
        title: 'Best Director',
      },
    ]
    expect(awardList({ awardData }).find('.award-section')).toHaveLength(2)
  })

  test('Should execute displayModal func when click close buttonr', () => {
    const displayModalFunction = jest.fn()
    const awardListComp = awardList({ displayModal: displayModalFunction })
    awardListComp.find(AwardListWrapper).find('button').simulate('click')
    expect(displayModalFunction).toBeCalled()
  })
})
