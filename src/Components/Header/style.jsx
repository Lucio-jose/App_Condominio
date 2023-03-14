import styled, { css } from "styled-components";

export const Head = styled.header`
  background: #24324a;
  padding: 10px 50px;
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: left 0.4s, height 0.6s;
  transition-delay: left 0.2s;

  > a > img {
    width: 50px;

    @media (max-width: 1024px) {
      position: relative;
      left: 10px;
      top: 5px;
    }
  }

  > button {
    top: 20px;
    right: 50px;
    position: absolute;
    background: none;
    border: none;
    display: none;

    @media screen and (min-width: 100px) and (max-width: 1024px) {
      display: flex;
    }

    i.fa-bars {
      position: absolute;
      color: #ffffff;
      font-size: 28px;
      cursor: pointer;
      border: 2px solid #d77b5d;
      height: 40px;
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media screen and (min-width: 100px) and (max-width: 1024px) {
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    overflow: hidden;
    padding: 0px;
    transition: all 0.6s;

    > div {
      width: 100%;
      flex-direction: column;
      margin-top: 7px;
      position: relative;
      left: -100%;
      height: 0;

      ${(props) =>
        props.menu === "none" &&
        css`
          left: -100%;
          height: 0;
        `}

      ${(props) =>
        props.menu === "flex" &&
        css`
          left: 0;
          height: 100%;
        `}
    nav {
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        transition: left 0.4s, height 0.6s;
        transition-delay: left 0.2s;

        > a {
          align-self: flex-start;
        }

        > ul {
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          transition: all 0.6s;
          width: 100%;

          > li {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            border-top: 1px solid #d77b5d;

            :last-child {
              border-bottom: 1px solid #d77b5d;
            }

            ::before {
              display: none;
            }

            > a {
              display: flex;
              align-items: center;
              height: 50px;
              padding: 5px 0;
              width: 100%;
              font-size: 10px;

              i {
                margin-right: 10px;
              }
            }
          }
        }
      }
    }
  }

  > div {
    display: flex;

    nav {
      display: flex;
      align-items: center;
      margin-top: 7px;

      :last-child {
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 1024px) {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: 5px 1px;
        }

        > a {
          background: #d77b5d;
          font-weight: 600;
          padding: 8px 20px;
          transition: all 0.4s;

          :hover {
            transform: scale(1.1);
            color: #ffffff;
          }

          :nth-child(2) {
            background: #ffffff;
            color: #d77b5d;
          }
        }
      }

      > a {
        color: #ffffff;
        margin: 0 5px;
        padding: 10px 15px;
        border-radius: 7px;
        transition: all 0.4s;
        text-transform: capitalize;
        font-size: 12px;

        :hover {
          color: #d77b5d;
        }
      }

      > ul {
        display: flex;
        align-items: center;
        justify-content: center;

        > li {
          margin: 0px 5px;
          display: flex;
          justify-content: center;
          position: relative;

          :nth-child(${(props) => props.page}) {
            ::before {
              transform: scaleX(1);
            }

            > a {
              color: #d77b5d;
            }
          }

          ::before {
            content: "";
            width: 100%;
            height: 3px;
            background: #d77b5d;
            position: absolute;
            transform: scaleX(0);
            transition: 0.5s;
          }

          :hover {
            a {
              color: #d77b5d;
            }

            ::before {
              transform: scaleX(1);
            }
          }

          > a {
            text-transform: capitalize;
            color: #fff;
            padding: 10px 15px;
            transition: 0.4s;
            font-size: 14px;
          }
        }
      }
    }
  }
`;
