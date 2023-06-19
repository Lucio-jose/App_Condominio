import React, { useEffect, useState } from "react";
import data, {categoriadata} from './data.js'
import * as Style from './style.js';
import { Link } from "react-router-dom";
import api from "../../../../services/api.js";
import { toast } from "react-toastify";

function Apartamentos(){
    const [categorias,setCategorias]= useState()

    const getCategorias=async()=>{
        const response = await api.
        get("/categories/apartaments")
        .then((res)=>{
       setCategorias(res.data)
       console.log(res.data);
        })
        .catch(({ response }) => {
          console.error(response.data);
        //   alert(response.data.mensagem||response.data||response.data.error)
        toast.error(response.data.mensagem||response.data||response.data.error);
        });
    }

    const setApartamentId=(id)=>{
         localStorage.setItem('apartmantoId',JSON.stringify(id))
         window.location.href=`/clientcomprar/${id}`

    }

    useEffect(()=>{
        getCategorias()
    },[])

return(
    <> 
    <Style.Container>
        {categorias?.map((item_, index_)=>(
            <>
            <section key={index_} className="category-name">
            <Link to="#" key={index_}> {item_.title} </Link>
            <h3>Melhores Apartamento para si</h3>
            </section>

            <Style.Content key={index_}>
            {item_?.apartaments?.map((item, index)=>(
                <Style.Card key={index}>
                  <img key={index} src={item?.image[0]?.url} />
                  <p key={index}>
                        {item?.description}
                    </p>
                    <span key={index}>$<span key={index}>
                    {item?.price}
                    </span></span>
                    <section key={index}>
                        <button id="btnvermore">Ver mais</button>
                       <Link onClick={()=>setApartamentId(item?.id)}><button>Reservar</button></Link>  
                    </section>
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