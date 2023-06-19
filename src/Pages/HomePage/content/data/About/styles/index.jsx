import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
height: 610px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width:875px){
    display: flex;
    flex-direction: column;
    height: 900px;
  }
`;

export const SideLetf = styled.div`
width: 48%;
height: 500px;

@media(max-width:875px){
  width: 100%;
}

@media(max-width:409px){
 text-align: center;
height: 610px;
}

h2, p{
  color: #24324A;
}

h2{
  font-size: 38px;
  margin-bottom: 20px;
  font-weight: 400;

  @media(max-width:409px){
    font-size: 30px;
   }
}
h5{
  font-size: 12px;
  font-weight: 900;
  color: #d77b5d;
  margin-bottom: 10px;
}

p{
  text-align: justify;
  font: 18px "Playfair Display", sans-serif;
  margin: 0px 0px 40px;

}

#p2{
  @media(max-width:768px){
    display: none;
  }
}

button{
  background-color: #d77b5d; 
  width: 140px;
  height: 35px;
  color: white;
  font-weight: 600;

  :hover{
    cursor: pointer;
  }
}

`
export const SideRight = styled.div`
width: 48%;
height: 500px;
background-color: #6b6868;
color: white;
display: flex;
justify-content: center;
align-items: center;

@media(max-width:875px){
  width: 100%;
}
`
