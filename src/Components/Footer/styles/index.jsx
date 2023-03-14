import styled from "styled-components";

const FooterTag = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  padding: 50px 10px 20px;
  background: #24324a;
  opacity: 0.8;
  width: 100%;

  span {
    width: 100%;
    color: #c7c7c7;
    text-align: center;
    font-size: 14px;
    margin: 20px 0;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 300px;
    max-width: 500px;
    min-width: 250px;
    margin: 5px 25px;

    h2 {
      color: #c7c7c7;
      padding: 10px 3px;
      margin: 3px 0px;
    }

    input {
      width: 100%;
      padding: 7px;
      border-radius: 10px;
      opacity: 0.4;
      border: 1px solid transparent;
      margin: 10px 0px;
      background: rgba(255, 255, 255, 0.7);
      transition: all 0.4s;

      ::placeholder {
        color: #000;
      }

      :focus{
        box-shadow: 1px 1px 10px #f7f7f7;
      }
    }

    button {
      width: 100px;
      color: #c7c7c7;
      background: #333;
      border: 1px solid #fff;
      border-radius: 10px;
      padding: 7px;
      cursor: pointer;
      transition: 0.3s;
      margin: 5px 0;

      :hover {
        color: #333;
        background: #c7c7c7;
      }
    }

    p {
      color: #c7c7c7;
      font-size: 14px;
      line-height: 26px;
    }

    ul {
      li {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        line-height: 26px;
        width: 100%;
        padding: 10px 0px;
        margin: 3px 0;
        border-bottom: 1px solid #6f6d6d;
        color: #c7c7c7;
        font-size: 14px;
        transition: 0.3s;

        :last-child {
          border-bottom: none;
        }

        :hover {
          border-bottom: 1px solid #fff;
          color: #fff;

          :last-child {
            border-bottom: none;
          }
        }

        > i {
          margin-right: 3px;
        }

        > a {
          color: #c7c7c7;
        }
        span {
          padding: 0;
          margin: 0;
          a {
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 3px;
            width: 30px;
            height: 30px;
            color: #333;
            background: #fff;
            margin: 0px 5px;
            transition: 0.4s;
            font-size: 14px;
            border: 1px solid transparent;

            i {
              transition: 0.4s;
            }

            :hover {
              color: #c7c7c7;
              background: #333;
              border: 1px solid #fff;
              i {
                transform: scale(1.5);
              }
            }
          }
        }
      }
    }
  }
`;

export { FooterTag };
