import styled from "styled-components";

export const MainForm = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  background: #24324a;
  justify-content: center;
  align-items: center;

  form{
    display: flex;
    flex-direction: column;
  background: #16161d;
  padding: 30px;
  width: 400px;
  height: 500px;
  justify-content: center;
  align-items: center;

  span{
    color: #f64c75;
    align-self: flex-start;
  }

  h2{
    margin-bottom: 25px;
    color: silver;
  }

  input{
    width: 95%;
    height: 45px;
    margin-bottom: 40px;
    border: 1px solid white;
    background-color: initial;
    padding-left: 15px;
    font-size: 16px;
    color: silver;
  }

  button{
    width: 95%;
    height: 45px;
    background-color: #24324a;
    color: white;
    font-size: 16px;
    margin-bottom: 15px;
  }
  button:focus{
    background-color: #16161d;
    border: 2px solid #24324a;
  }

  a{
    color: silver;
    margin-top: 20px;
  }
  }
`;
