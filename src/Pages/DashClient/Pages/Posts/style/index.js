import styled from "styled-components";

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

`


