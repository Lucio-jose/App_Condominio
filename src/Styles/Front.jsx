import styled from "styled-components";
import bg from "../images/bg.png";

export const Banner = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${bg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: start center;
  padding: 20px;
  width: 100%;
  height: 30vh;
  min-height: 400px;

  h1 {
    font-size: 56px;
    color: #fff;
  }

  button {
    position: relative;
    background: transparent;
    color: #36ccfc;
    border: 2px solid #36ccfc;
    padding: 10px 15px;
    font-size: 16pt;
    border-radius: 30px;
    margin: 15px 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;

    span {
      position: relative;
      z-index: 1;
      transition: all 0.5s;
      color: #232323;
    }

    ::after {
      content: "";
      position: absolute;
      background: #fff;
      width: 100%;
      height: 100%;
      border-radius: 20px;
      transition: all 0.5s;
    }

    :hover {
      span {
        color: #fff;
      }

      ::after {
        transform: scaleY(0);
      }
    }
  }
`;

export const Container = styled.section`
  margin: 75px auto;
  display: flex;

  @media screen and (max-width: 768px) {
    max-width: 540px;
    flex-wrap: wrap;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 260px) and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
  }
`;
