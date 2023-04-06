import styled ,{ keyframes} from 'styled-components'

const Animate = keyframes`
  from{
    margin-top: 1000px;
    }
    to{
       margin-top: 0px;
    }

`;

export const Container = styled.div`
width: 95%;
background-color: #F4F4F4;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 30px 0px 15px 0px;
margin-top: -70px;
border-radius: 15px;
    animation-name: ${Animate};
    animation-duration: 1s;
`

export const Content = styled.div`
width: 95%;
padding-bottom: 5px;
display: flex;
justify-content: center;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
background-color: #FFFFFF;
    border-radius: 3px;
    margin-bottom:20px;

    @media(max-width: 583px) {
        justify-content: space-evenly;
    }
    form{
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    input{
        background-color: #F1f1f1;
        border: 1px solid #e1e1e1;
        height: 40px;
        margin-right: 10px;
        border-radius: 50px;
        padding-left: 10px;
        font-size: 17px;
    }

    #inptdesc{
        width: 60%;
    }
    
    button{
        width: 50px;
        height: 40px;
        background-color: #e1e1e1;
        border-radius: 50px;
        cursor: pointer;

        img{
            width: 60%;
            height: 60%;
        }
    }
`
