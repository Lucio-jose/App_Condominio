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
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
animation-name: ${Animate};
animation-duration: 1s;

`
export const Content = styled.div`
width: 95%;
background-color: white;
display: flex;
padding-top: 40px;
border-radius: 15px;
margin-top: -80px;
flex-direction: column;
align-items: center;

`
export const SubContent = styled.div`
width: 90%;
height: 130px;
display: flex;
justify-content: space-between;
margin-bottom: 40px;

`

export const Card = styled.div`
width: 40%;
height: 110px;
background-color: #f3f3f3f1;
border: 1px solid #e1e1e1;
padding: 0px 10px;

h3{
    font-weight: 500;
}


section{
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span{
    color: rgb(105, 104, 104);
    font-size: 15px;
}

    button{
        background-color: #4883ff;
        height: 27px;
        width: 80px;
        color: white;
    }

    #secondbtn{
        background-color: rgb(255, 166, 0);
    }
    #thirdbtn{
        background-color: rgb(128, 226, 48);
    }
    #fourthbtn{
        background-color: violet;
    }
}

`

