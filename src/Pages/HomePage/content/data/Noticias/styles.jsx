import styled from "styled-components";
import career from "../../../../../images/career.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  overflow: hidden;
  margin: 20px auto;

  h1 {
    font-size: 30px;
    line-height: 2;
    margin: 20px auto;
  }

  > ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    > li {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      width: 400px;
      min-width: 400px;
      height: 300px;
      margin-right: 10px;
      padding: 20px 25px;

      background-image: linear-gradient(
          to right bottom,
          rgba(0, 0, 0, 0.6),
          rgba(0, 0, 0, 0.6)
        ),
        url(${career});
      background-position: center;
      background-size: cover;

      div {
        padding-left: 20px;

        h4 {
          color: #f7f7f7;
          font-size: 22px;
          line-height: 1.5;
        }

        ul {
          display: flex;

          li {
            margin-right: 8px;

            a {
              font-size: 14px;
              color: #fff;
              font-weight: 500;
              transition: all 0.3s;

              ::after {
                content: "|";
                color: #fff;
                margin-left: 8px;
              }
            }
          }
        }
      }
    }
  }
`;
