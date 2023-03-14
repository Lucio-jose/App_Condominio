import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
height: 270px;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media(max-width:833px){
height: 770px;
  }
  @media(max-width:768px){
height: 1100px;
justify-content: center;
  }

  div{
    width: 250px;
    height: 350px;
    background-color: #24324a;
    position: relative;
    margin-top: -170px;
    text-align: start;
    @media(max-width:768px){
margin-bottom: 10px;
  }

    :hover{
      cursor: pointer;
    background-color: #24324aeb;
    }

    img{
      width: 100%;
      height: 200px;
    }

    h2{
      font-size: 18px;
      margin: 7px;
      color: white;
    }
    
    p{
      color: #ffffffa4;
      margin: 7px;
      margin-bottom: 20px;
      font-size: 14px;
    }
    span{
      font-size: 20px;
      margin: 0px 0px 0px 7px;
      color: #d77b5d;
      font-weight: 600;
    }
}
`;
