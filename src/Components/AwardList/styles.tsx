import styled from 'styled-components'

export const AwardListWrapper = styled.div`
  width: 100%;
  text-align: right;

  .award-title {
    font-size: 26px;
    text-align: center;
    padding: 26px 10px 40px;
    font-weight: bold;
  }

  .award-section {
    margin-bottom: 40px;

    .title {
      font-size: 24px;
      background: #b4b897;
      padding: 10px 20px;
      border-radius: 4px;
      margin-bottom: 10px;
      font-style: italic;
      font-weight: bold;
      text-align: left;
    }
  }

  > button {
    position: sticky;
    bottom 20px;
    right: 20px;
    background: #B8405E;
    font-size: 18px;
    border: 1px solid #ffffff;
    border-radius: 4px;
    color: #ffffff;
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
      color: #cccccc;
      transform: scale(1.05);
    }
  }
`
