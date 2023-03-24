import styled from "styled-components";

export const Nav = styled.div`
width: 220px;
height: 100vh;
background-color: rgb(116, 243, 232);
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
    color: black;
    font-size: 16px;
    height: 50px;

    :hover{
        background-color: #16161D;
        transition: 0.5s;
        cursor: pointer;
        color: #FFFFFF;
    }
}
img{
    height: 20px;
    width: 20px;
    margin-right: 7px;
}
`