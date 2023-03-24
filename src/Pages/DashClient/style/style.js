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
height: 1500px;
background-color: #f3f3f3f1;
margin-left: 225px; 

@media(max-width: 1130px) {
    height: 1550px;
    justify-content: center;
    }
`