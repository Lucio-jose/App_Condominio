import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 600px;
background-color: #f3f3f3f1;
display: flex;
justify-content: center;
align-items: center;

@media (max-width:634px){
flex-direction: column-reverse;
height: 1000px;
justify-content: start;
}
`
export const Info = styled.div`
width: 44%;
height: 530px;
background-color: white;
margin-right: 20px;
display: flex;
flex-direction: column;

@media (max-width:634px){
width: 100%;
}

p{
    font-size: 14px;
    text-align: justify;
    padding: 0px 20px;
}

.AllInfo{
    width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 30px;

div{
    width: 47%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;

h3{
    margin-top: 20px;
    color: black;
    width: 100%;
    border-bottom: 0.3px solid rgb(116, 243, 232);
    text-align: center;
    padding-bottom: 8px;

    @media (max-width:634px){
        font-size: 15px;
}
}

span{
    margin-top: 20px;
    background-color: #f3f3f3f1;
    font-size: 14px;
}
}
} 

.ImgsApartamento{
    width: 100%;
    height: 150px;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        width: 120px;
        height: 100px;
    }
}

#spanp{
    width: 100%;
    padding-left: 20px;
}


`
export const DivForm = styled.div`
width: 43%;
height: 530px;
background-color: white;
display: flex;
flex-direction: column;
align-items: center;

@media (max-width:634px){
width: 100%;
height: 320px;
}

h3{
    font-weight: 400;
    margin-top: 10px;
}


form{
    margin-top: 20px;
    height: 200px;
    display: flex;
    flex-direction: column;

    @media (max-width:634px){
       width: 100%;
    }
 
    #AreaInputs{
        display: flex;
    justify-content: space-evenly;
    }

    #AreaBtnEnv{
        width: 97%;
        display: flex;
        justify-content: end;

        button{
            width: 80px;
            height: 30px;
            background-color: rgb(116, 243, 232);
        }
    }
    div{
        width: 45%;

        label{
            font-size: 14px;
            color: #16161d;
        }

        input{
            width: 100%;
            background-color: #e1e1e1;
            height: 35px;
            margin-bottom: 15px;
            padding-left: 10px;
        }
        select{
            width: 100%;
            background-color: #e1e1e1;
            height: 35px;
            margin-bottom: 15px;

            optgroup{
                background-color: red;
                color: white;
            }
        }
    }
}
`
