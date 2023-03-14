import styled from "styled-components";

export const DestaquesTag = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  margin: 15px auto;

  h1 {
    color: #00e0ff;
    width: 100%;
    padding: 8px 10px;
    text-align: center;
    margin: 10px 0px 7px;
  }

  ul {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    li {
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;

      div {
        h4 {
          margin-bottom: 7px;
          font-size: 12px;
          transition: all 0.3s;

          :hover {
            color: #00e0ff;
          }
        }
        span {
          font-size: 12px;
          color: #eee;
          opacity: 0.7;
        }
      }

      img {
        width: 75px;
        height: 75px;
        margin-right: 10px;
        transition: all 0.4s;

        :hover {
          opacity: 0.7;
        }
      }
    }
  }
`;
