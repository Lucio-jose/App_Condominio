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
        background-color: #4883ff;

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
export const Card = styled.div`
width: 225px;
height: 150px;
display: flex;
flex-direction: column;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
text-align: center;
border-radius: 15px;
margin: 7px 5px;
padding: 7px;

:hover{
    cursor: pointer;
    transition: 1s;
}

img{
    width: 40px;
    height: 40px;
    margin: 10px 0px 0px 10px;
}
h4{
    font-weight: 600;
    font-size: 15px;
    display: flex;
    justify-content: flex-start;
    margin: 10px 0px 10px 10px;
}
p{
    font-size: 20px;
    font-weight: 600;
    display: flex;
    justify-content: flex-start;
    margin-left: 10px;
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
