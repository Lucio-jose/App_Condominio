import styled from "styled-components";
//import data from "./data";

export const Container = styled.div`
width: 100%;
background-color: #F4F4F4;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 30px 0px;

.category-name{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 95%;
        height: 60px;

        a{ font-family: 'Rubik',sans-serif;
            font-size: 24px;
            font-weight: 500;
            color: #222;
        }

        h3{
            font-family: 'Rubik',sans-serif;
            font-size: 19px;
            font-weight: 500;
            color: #222;

            @media(max-width: 379px) {
              font-size: 17px;
    }
            
        }

    }
`

export const Content = styled.div`
width: 95%;
display: flex;
align-items: center;
flex-wrap: wrap;
background-color: #FFFFFF;
border: 1px solid #e1e1e1;
padding-bottom: 20px;
    border-radius: 3px;
    margin-bottom:20px;

    
    @media(max-width: 583px) {
        justify-content: space-evenly;
    }
    
`
export const Card = styled.div`
width: 174px;
height: 340px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
text-align: end;
border-radius: 15px;
margin: 7px 25px;

@media(max-width: 389px) {
    width: 150px;
    height: 320px;
    text-align: start;
    }

:hover{
    background-color: #F4F4F4;
    cursor: pointer;
    padding: 5px;
    transition: 1s;
}

img{
    width: 160px;
    height: 150px;

    @media(max-width: 389px) {
    width: 150px;
    height: 150px;
    }
}
p{
    font: 14px Rubik, sans-serif;
    margin: 15px 0px;
    color: #0066C0;
}
span{
  font-size: 16px;
    color: #222;
    font-weight: 500;
    width: 100%;
    margin-top: 20px;
}

div{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}

section{
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 10px;

    button{
        height: 30px;
        width: 70px;
        background-color: rgb(116, 243, 232);
    }
    #btnvermore{
        background-color: #222;
        color: white;
    }
}
`
