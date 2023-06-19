import styled from "styled-components";

export const UserLogado = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    > a > img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 2px solid #36ccff;
      cursor: pointer;
      margin-right: 10px;
    }

    :hover {
      > div {
        visibility: visible;
        opacity: 1;
      }
    }

    > div {
      visibility: hidden;
      opacity: 0;
      transition: all 0.5s;

      position: absolute;
      top: 80px;
      right: 50px;
      z-index: 999999;
      background: #191919;
      height: 200px;
      width: 250px;
      padding: 5px 20px;

      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;

      > a {
        font-size: 13px;
        color: #f7f7f7;
        line-height: 26px;
        transition: all 0.4s;
        font-weight: 500;
        height: 36px;
        margin: 2px 0;

        display: flex;
        align-items: center;
        justify-content: center;

        :last-child {
          background: #36ccff;
          color: #f7f7f7;
          font-size: 14px;
          width: 100%;
          padding: 8px 15px;
          text-transform: uppercase;
          font-weight: 600;
          border: 2px solid transparent;
          transition: all 0.4s;
          margin-top: 5px;

          :hover {
            color: #36ccff;
            background: transparent;
            border: 2px solid #36ccff;
            cursor: pointer;
          }
        }

        i.fa-ellipsis-v {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.7);
          margin-right: 5px;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        i {
          margin-right: 5px;
          transition: all 0.4s;
        }

        :hover {
          color: #36ccff;

          i {
            color: #f7f7f7;
            margin-right: 10px;
          }
        }
      }
    }
  }
`;
