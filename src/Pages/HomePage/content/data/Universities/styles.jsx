import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  margin: 10px auto;
  height: auto;

  h1 {
    text-align: center;
    font-size: 30px;
    color: #191919;
    margin: 10px 25px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;

    @media (max-width: 1024px) {
      flex-direction: column;
      width: 100%;

    }

    li {
      display: flex;
      align-items: center;
      height: 200px;
      background: transparent;
      border: 1px solid #bbbbbb;
      flex: 0 0 45%;
      max-width: 60%;
      min-width: 300px;
      padding-left: 15px;
      padding-right: 15px;
      margin: 10px auto;
      transition: all 0.4s;

      :hover {
        box-shadow: 2px 2px 10px #bbbbbb;
        border: 1px solid transparent;
      }

      @media (max-width: 1024px) {
        width: 90%;
        height: auto;
        padding: 20px;
        margin: 10px auto;
        max-width: 100%;
      }

      img {
        width: 30%;
        margin-right: 20px;

        @media (max-width: 768px;)
        {
          width: 80%;
          margin: 0 auto;
          margin-bottom: 15px;
        }
      }

      div {
        width: 80%;

        @media (max-width: 1024px)
        {
          width: 100%;
        }

        h4 {
          color: #232323;
          margin-bottom: 15px;
          transition: all 0.4s;

          :hover {
            color: #626262;
          }
        }

        p {
          color: #626262;
          line-height: 22px;
          font-size: 13px;
          transition: all 0.4s;
          width: 100%;
          height: 66px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;

          :hover {
            color: #dddddd;
          }
        }
      }
    }
  }
`;
