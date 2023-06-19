import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 300px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
@media(max-width: 1130px) {
    height: 400px;
    }
    @media(max-width: 1273px) {
    height: 450px;
    }
    
    @media(max-width: 749px) {
    height: 750px;
    }
    @media(max-width: 634px) {
    height: 350px;
    }
`

export const Content = styled.div`
width: 95%;
display: flex;
justify-content: center;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;

    @media(max-width: 555px) {
    justify-content: center;
    }
    @media(max-width: 430px) {
    justify-content: center;
    }

    #thirsd{
        background-color: rgb(116, 243, 232);

        :hover{
            background-color: rgb(46, 214, 200);
        }
    }

    #first{
        background-color: silver;

        :hover{
            background-color: #2563e9;
        }
    }
    #second{
        background-color: greenyellow;

        :hover{
            background-color: green;
        }
    }
    #fourth{
        background-color: rgb(245, 147, 147);

        :hover{
            background-color: rgb(248, 171, 171);
        }
    }
`
export const Card = styled(Link)`
width: 255px;
height: 130px;
display: flex;
flex-direction: column;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
text-align: center;
border-radius: 7px;
margin: 7px 5px;
padding: 7px;
color: #16161d;

@media(max-width: 494px) {
    width: 150px;
    height: 100px;
    }

:hover{
    cursor: pointer;
    transition: 1s;
}

img{
    width: 40px;
    height: 40px;
    margin: 10px 0px 0px 10px;

    @media(max-width: 494px) {
    width: 30px;
    height: 30px;
    }
}
h4{
    font-weight: 600;
    font-size: 15px;
    display: flex;
    justify-content: flex-start;
    margin: 10px 0px 10px 10px;

    @media(max-width: 494px) {
    font-size: 12px;
    }
}
p{
    font-size: 18px;
    display: flex;
    justify-content: flex-start;
    margin-left: 10px;

    @media(max-width: 494px) {
    font-size: 12px;
    }
}

div{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}
button{
    width: 70px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid black;
}
#comprar{
    background-color: #4883ff;
    border: none;
    color: white;
}
`
