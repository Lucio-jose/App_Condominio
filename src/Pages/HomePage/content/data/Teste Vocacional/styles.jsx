import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
  background: #191919;
  height: 250px;
  margin: 15px auto;
  padding: 20px;
  border-radius: 15px;

  @media (max-width: 578px) {
    width: 100%;
  }

  h1 {
    margin: 10px auto;
    color: #2196bd;
  }

  p {
    color: #c7c7c7;
    line-height: 2;
    margin-bottom: 15px;
  }

  a {
    color: #ffffff;
    background: #298900;
    padding: 8px 15px;
    border-radius: 15px;
    transition: all 0.4s;

    i {
      transition: all 0.4s;
    }

    :hover {
      background: #2196bd;
      color: #ffffff;

      i {
        margin-left: 15px;
      }
    }
  }
`;
