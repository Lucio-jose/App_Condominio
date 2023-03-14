import React from "react";
import data, {categoriadata} from './data.js'
import * as Style from './style.js';
import { Link } from "react-router-dom";

function Apartamentos(){
return(
    <>
    <Style.Container>
        {categoriadata.map((item_, index_)=>(
            <>
            <section key={index_} className="category-name">
            <Link to="#" key={index_}> {item_.desc} </Link>
            <h3>Melhores Apartamento para si</h3>
            </section>

            <Style.Content key={index_}>
            {data.map((item, index)=>(
                <Style.Card key={index}>
                    <img key={index} src={item.img} />
                    <p key={index}>
                        {item.describe}
                    </p>
                    <span key={index}>$<span key={index}>
                        {item.preco}
                    </span></span>
                </Style.Card>
            ))}
        </Style.Content>
        </>
        ))}
      
    </Style.Container>
    </>
)
}
export default Apartamentos;