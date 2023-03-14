import styled from "styled-components";

export const Nav = styled.div`
width: 220px;
height: 100vh;
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
position: fixed;
left: 0px;
`
export const Logo = styled.div`
width: 100%;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
//background-color: rgb(82, 115, 165);
border-bottom: 1px solid rgb(190, 190, 190); 

span{
    font-weight: 600;
}

img{
    width: 30px;
    height: 30px;
}
`
export const ListNav = styled.div`
width: 100%;
height: 400px;
display: flex;
flex-direction: column;

a{
    display: flex;
    padding-left: 40px;
    align-items: center;
    text-decoration: none;
    margin-top: 20px;
    color: rgb(73, 73, 73);
    font-size: 15px;
    height: 50px;

    :hover{
        background-color: rgb(199, 199, 199);
        transition: 0.5s;
        cursor: pointer;
        color: black;
    }
}
img{
    height: 20px;
    width: 20px;
    margin-right: 7px;
}
`