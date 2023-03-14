import styled from "styled-components"

export const Container = styled.div`
width: 100%;
height: 450px;
display: flex;
justify-content: space-evenly;
`
export const Content = styled.div`
width: 47%;
height: 400px;
background-color: white;
padding: 15px 15px;
border: 1px solid #e1e1e1;

h3{
    color: #4883ff;
    margin-bottom: 7px;
}

span{
    color: rgb(121, 121, 121);
}
`

export const Subcontent = styled.div`
width: 100%;
height: 300px;
display: flex;
justify-content: space-between;


div{
    width: 47%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    section{
        height: 130px;
        width: 98%;
        background-color: rgb(241, 241, 241);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .Estatistica1{
        background-color: rgba(156, 238, 135, 0.527);
    }

    .Estatistica0{
        background-color: rgba(236, 201, 106, 0.425);
    }
    .Estatistica2{
        background-color: rgba(238, 135, 183, 0.425);
    }
}

`