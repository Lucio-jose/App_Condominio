import styled from "styled-components";
import Img from "../../../../../images/icons-dash/icone-search.png"

export const Container = styled.div`
width: 100%;
height: 200px;
background-color: #4883ff;
display: flex;
padding-top: 40px;
justify-content: space-between;
border-radius: 20px;
margin-top: -20px;
color: white;

section{
    display: flex;
}

img{
    width: 25px;
    height: 25px;
    margin-left: 15px;
}

#avatar{
    width: 35px;
    height: 35px;
    border-radius: 100%;
    margin: 0px 15px;
}

div{
    width: 300px;
    height: 60px;
display: flex;
justify-content: flex-end;
align-items: center;

button{
    height: 45px;
    width: 110px;
    background-color: #4883ff;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 50px;

    :hover{
        background-color: white;
        border: 1px solid #4883ff;
        color: #4883ff;
        transition: 0.5s;
        cursor: pointer;
    }
}
}

input{
    background-image: url(${Img});
    background-repeat: no-repeat;
    background-color: #739efadc;
    width: 25%;
    padding: 12px;
    color: white;
    background-position: 96%;
    border-radius: 30px;
    margin: 0px 15px 0px 20px;
    height: 40px;
}
`

