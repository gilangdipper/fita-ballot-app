import { shallow, ShallowWrapper } from 'enzyme'

import AwardModal from '.'
import { IAwardModal } from './interfaces'

describe('Award Modal', () => {
  const props: IAwardModal = {
    isShow: false,
    closeModal: () => {},
    movieNominated: {},
  }
  const modal = (addProps?: Partial<IAwardModal>): ShallowWrapper =>
    shallow(<AwardModal {...props} {...addProps} />)

  test('Should render Award modal properly', () => {
    expect(modal().find('.main-content').prop('children')).toBe(
      'No nomination!',
    )

    const movieNominated = {
      'best-picture': {
        awardTitle: 'Best Picture',
        movie: {
          title: 'Mank',
          photoUrL: 'https://variety.com/wp-content/uploads/2020/12/mank.jpg',
          id: 'mank',
        },
      },
      'best-director': {
        awardTitle: 'Best Director',
        movie: {
          title: 'Aaron Sorkin for The Trial of the Chicago 7',
          photoUrL:
            'https://variety.com/wp-content/uploads/2020/12/trial_of_the_chicago_seven.jpg',
          id: 'aaron-sorkin',
        },
      },
    }
    expect(
      modal({ movieNominated }).find('.main-content').prop('children'),
    ).toHaveLength(2)
  })

  test('Should execute closeModal func when click close buttonr', () => {
    const closeModalFunction = jest.fn()
    const modalComp = modal({ closeModal: closeModalFunction })
    modalComp.find('button').simulate('click')
    expect(closeModalFunction).toBeCalled()
  })
})
