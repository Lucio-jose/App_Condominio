import React from "react";
import data from './data.js'
import * as Style from './style.js';

function Cards(){
return(
    <>
    <Style.Container>
        <Style.Content>
            {data.map((item, index)=>(
                <Style.Card key={index} id={item.id} to={item.path}>
                    <img key={index} src={item.img} />
                    <h4 key={index}> {item.title} </h4>
                    <p key={index}>
                        {item.describe}
                    </p>
                </Style.Card>
            ))}
        </Style.Content>
    </Style.Container>
    </>
)
}
export default Cards;