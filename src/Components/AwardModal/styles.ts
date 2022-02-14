import styled from 'styled-components'

export const ModalWrapper = styled.div<{ isShow: boolean }>`
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);

  ${(props) =>
    props.isShow &&
    `
    display: block;
  `}

  .modal-content {
    background-color: #fefefe;
    margin: auto;
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
