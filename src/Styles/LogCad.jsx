import styled from "styled-components";

export const MainForm = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  min-height: 600px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: 30px;
    background: #3a3c3f;

    form {
      display: flex;

      h3 {
        color: #ffffff;
      }

      @media (max-width: 568px) {
        height: 100%;
        width: 100%;
      }
    }

    @media (max-width: 568px) {
      padding: 0px;
    }
  }
`;

const FormTag = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
  background: #232323;
  padding: 30px;
  width: 400px;
  height: 500px;
  min-width: 270px;
  min-height: 500px;
  border-radius: 20px;

  @media (max-width: 568px) {
    height: 100%;
    width: 100%;
    min-width: auto;
    min-height: auto;
    border-radius: 0;
  }

  img {
    width: 100px;
    margin-bottom: 20px;
  }

  article {
    width: 100%;
    margin: 15px 0;
    border-top: 0.1px solid #ccc;
  }

  input {
    background: transparent;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 5px;
    padding: 5px 10px;
    width: 300px;
    height: 40px;
    margin: 10px 0;
    transition: 0.3s;

    ::placeholder {
      color: #fff;
    }

    :focus {
      border-color: rgba(54, 202, 252, 0.537);

      ::placeholder {
        color: #ffffff;
      }
    }
  }

  > span {
    display: flex;
    color: rgba(77, 255, 0, 0.87);
    font-size: 12px;

    a {
      margin: 5px 0;
      color: rgba(77, 255, 0, 0.87);
      font-size: 14px;
    }
  }

  button[type="submit"],
  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    transition: 0.3s;
    margin: 5px 0;
    cursor: pointer;

    :hover {
      background: transparent;
      border: 2px solid rgba(54, 202, 252, 0.537);
      color: #ffffff;
    }

    background: rgba(54, 202, 252, 0.537);
    color: #ffffff;
    padding: 10px 15px;
    height: 40px;
    width: 300px;
    border: 1px solid transparent;
    border-radius: 5px;
  }
  > a {
    :hover {
      background: transparent;
    }

    background: rgba(54, 202, 252, 0.537);
  }
`;

export default FormTag;
