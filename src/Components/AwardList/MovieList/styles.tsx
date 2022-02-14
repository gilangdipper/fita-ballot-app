import styled from 'styled-components'

export const MovieListWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;

  .movie-box {
    flex: 0 0 33.33%;

    .movie-card {
      background: #009b86;
      margin: 10px;
      padding: 10px;
      border-radius: 2px;
      text-align: center;
      transition: transform 0.5s;

      .movie-title {
        height: 38px;
        margin-bottom: 6px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
      }

      img {
        width: 100%;
        height: 319px;
        object-fit: cover;
      }

      &.selected,
      &:hover {
        background: #34ac9c;
        color: #cccccc;
        transform: scale(1.05);
      }

      &.selected {
        border: 1px solid #ffffff;
      }

      button {
        border: 1px solid #ffffff;
        background: #009b86;
        color: #ffffff;
        border-radius: 2px;
        padding: 10px 20px;
        font-size: 14px;
        margin-top: 16px;
        cursor: pointer;

        &:hover {
          background: #34ac9c;
          color: #cccccc;
        }
      }
    }
  }

  @media screen and (max-width: 425px) {
    .movie-box {
      flex: 0 0 50%;

      .movie-card {
        img {
          height: auto;
        }
    }
  }
`
