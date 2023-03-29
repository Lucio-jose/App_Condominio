import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh; 
background-color: white;
display: flex;
justify-content: space-evenly;
`

export const BodyDash = styled.div`
width: 85%;
padding-bottom: 20px;
background-color: #f3f3f3f1;
margin-left: 225px; 

@media(max-width: 1130px) {
    height: 1550px;
    justify-content: center;
    }

    @media (max-width:634px){
width: 100%;
margin-left: 0px;
}
`