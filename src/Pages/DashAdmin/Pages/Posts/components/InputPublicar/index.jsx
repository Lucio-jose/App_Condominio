import React from "react";
import * as Style from './style.js';
import Img from '../../../../../../images/icons-dash/paper-plane.svg'

function Input(){
return(
    <>
    <Style.Container>
        <Style.Content>
            <form action="">
                <input type="text" name="" id="" placeholder="Titulo"/>
                <input type="text" name="" id="inptdesc" placeholder="Descrição"/>
                <button type="submit">
                    <img src={Img} alt="Publicar" />
                </button>
            </form>
         </Style.Content>
    </Style.Container>
    </>
)}
export default Input;