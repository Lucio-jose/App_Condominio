import styled from "styled-components"

export const AreaTitle = styled.div`
width: 100%;
height: 150px;
display: flex;
justify-content: center;
align-items: center;
`
export const Content = styled.div`
width: 95%;
height: 60px;
border: 1px solid #e1e1e1;
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0pc 10px;

h3{
    font-weight: 400;
    font-size: 21px;
}
`
export const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;

h3{
    height: 60px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #e1e1e1;
    color: rgb(119, 119, 119);
}

span{
            font-size: 14px;
            margin-top: 10px;
            color: silver;
        }

`
export const SideLeft = styled.div`
width: 25%;
border: 1px solid #e1e1e1;
background-color: white;
display: flex;
flex-direction: column;
padding: 0px 10px 15px 10px;
margin-left: 20px;

@media(max-width: 530px){
    display: none;
}

div{
    display: flex;
    margin-top: 15px;
    height: 60px;

    :hover{
        background-color: #e1e1e1;
        cursor: pointer;
    }
    section{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 10px;
    }
}

`
export const SideRight = styled.div`
width: 68%;
border: 1px solid #e1e1e1;
background-color: white;
display: flex;
padding: 0px 10px 15px 10px;
flex-direction: column;

@media(max-width: 530px){
    width: 95%;
}

.contentRight{
    display: flex;
    margin-top:auto;
    height: auto;
    border-bottom: 1px solid #e1e1e1;

    :hover{ 
        background-color: #e1e1e1;
        cursor: pointer;
    }

    #btn1{
        background-color: brown;
        width: 100%;
        height: 20px;
        color: white;
        margin-bottom: 10px;
    }
    #btndelct{
        background-color: #4883ff;
    }

    .testanto{
        display: flex;
        flex-direction: column;
        width: 100px;

        height: auto;
        justify-content: center;

        span{
            color: rgb(119, 119, 119);
        }
    }
    #center{
        width: 70%;
        margin: 0px 10px;
    }
}

`
