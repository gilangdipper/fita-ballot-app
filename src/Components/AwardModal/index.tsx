import { FC, ReactNode } from 'react'

import { IAwardModal } from './interfaces'
import { ModalWrapper } from './styles'

const AwardModal: FC<IAwardModal> = ({
  isShow,
  closeModal,
  movieNominated,
}) => {
  const renderMainContent = () => {
    let content: ReactNode
    if (Object.keys(movieNominated).length < 1) {
      content = 'No nomination!'
    } else {
      content = Object.keys(movieNominated).map((award) => (
        <div className="nomination" key={award}>
          {movieNominated[award].awardTitle}{' '}
          <span>{movieNominated[award].movie.title}</span>
        </div>
      ))
    }
    return <div className="main-content">{content}</div>
  }
  return (
    <ModalWrapper isShow={isShow}>
      <div className="modal-content">
        <div className="header-content">
          <h3>Nomination Summaries</h3>
          <button type="button" className="close" onClick={closeModal}>
            &times;
          </button>
        </div>
        {renderMainContent()}
      </div>
    </ModalWrapper>
  )
}

export default AwardModal
