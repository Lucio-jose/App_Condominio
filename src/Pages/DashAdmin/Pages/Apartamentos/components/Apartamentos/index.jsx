import React from "react";
import data, {categoriadata} from './data.js'
import * as Style from './style.js';
import TitleAdd from "../TitleAdd/index.jsx";
import { Link } from "react-router-dom";
import DescApartamento from "../descApartamento/index.jsx";

function Apartament(){
return(
    <>
    <Style.Container>
        <TitleAdd/> 
        {categoriadata.map((item_, index_)=>(
            <>
            <section key={index_} className="category-name">
            <Link to="#" key={index_}> {item_.desc} </Link>
            </section>

            <Style.Content key={index_}>
            {data.map((item, index)=>(
                <Style.Card key={index}>
                    <img key={index} src={item.img} />
                    <p key={index}>
                        {item.describe}
                    </p>
                    <section key={index}>
                        <DescApartamento/>
                    <span key={index}>$<span key={index}>
                        {item.preco}
                    </span></span>
                    </section>
                   
                </Style.Card> 
            ))}
        </Style.Content>
        <div id="DiVerMais">
            <span>
                <Link>Ver mais</Link>
            </span>
        </div>
        </>
        ))}
      
    </Style.Container>
    </>
)
}
export default Apartament;