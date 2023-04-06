import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: #f3f3f3f1;
flex-direction: column;
`
export const ContentPub = styled.div`
border: 1px solid #e1e1e1;
width: 90%;
background-color: white;
padding: 20px 10px;
text-align: justify;
margin-bottom: 15px;

div{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    align-items: center;

    span{
    font-size: 14px;
    color: silver;
}
}

p{
    font-size: 15px;
}

section{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;

    button{
        width: 80px;
        height: 25px;
        background-color: brown;
        margin-right: 10px;
        color: white;
    }

    #descrbtn1{
        background-color: #4883ff;
    }
}

`


