import { FC } from 'react'
import styled from 'styled-components'
import { IAwardModal } from './interfaces'

const ModalWrapper = styled.div<{ isShow: boolean }>`
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */

  ${(props) =>
    props.isShow &&
    `
    display: block;
  `}

  .modal-content {
    background-color: #fefefe;
    margin: auto;
    border: 1px solid #888;
    max-width: 425px;
    width: 100%;
    border-radius: 6px;

    .header-content {
      display: flex;
      padding: 10px 20px;
      justify-content: space-between;
      background: #b8405e;
      align-items: center;

      h3 {
        margin: 0;
      }

      .close {
        color: #ffffff;
        float: right;
        font-size: 28px;
        font-weight: bold;
        border: 0;
        background: transparent;
      }

      .close:hover,
      .close:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
      }
    }

    .main-content {
      color: #000000;
      padding: 20px;

      .nomination {
        font-size: 16px;
        margin-bottom: 8px;

        span {
          background: #b8405e;
          color: #ffffff;
          font-weight: bold;
          font-style: italic;
          padding: 0 10px;
        }
      }
    }
  }
`

const AwardModal: FC<IAwardModal> = ({
  isShow,
  closeModal,
  movieNominated,
}) => {
  return (
    <ModalWrapper isShow={isShow}>
      <div className="modal-content">
        <div className="header-content">
          <h3>Nomination Summaries</h3>
          <button type="button" className="close" onClick={closeModal}>
            &times;
          </button>
        </div>
        <div className="main-content">
          {Object.keys(movieNominated).map((award) => (
            <div className="nomination" key={award}>
              {movieNominated[award].awardTitle}{' '}
              <span>{movieNominated[award].movie.title}</span>
            </div>
          ))}
        </div>
      </div>
    </ModalWrapper>
  )
}

export default AwardModal
