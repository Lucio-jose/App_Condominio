import styled from 'styled-components';
import bgcursos from "../../../images/slider/sliding-4.jpg";

export const Container = styled.div`
  width: 98%;
  height: 300px;
  margin: 10px auto;
  display: flex;
  padding-left: 25px;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.7)
    ),
    url(${bgcursos});
  background-position: center;
  background-size: cover;

  h1 {
    font-size: 46px;
    width: 100%;
    max-width: 1000px;
    color: #f7f7f7;
  }

  span {
    color: #aaa;
    font-size: 14px;
    line-height: 28px;
    width: 100%;
    max-width: 500px;
  }
`;
