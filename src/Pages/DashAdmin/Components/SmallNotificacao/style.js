import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 150px; 
display: flex;
justify-content: center;
align-items: center;
`
export const Content = styled.div`
width: 95%;
height: 120px; 
border: 1px solid #e1e1e1;
background-color: white;
display: flex;  
flex-direction: column;
justify-content: center;
padding: 0px 15px;

h3{
    margin-bottom: 10px;
    color: #4883ff;
    font-weight: 500;
}
span{
    color: rgb(105, 104, 104);
}
`