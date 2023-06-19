import React, { useEffect, useState } from "react";
import * as Style from './style.js';
import TitleAdd from "../TitleAdd/index.jsx";
import { Link } from "react-router-dom";
import DescApartamento from "../descApartamento/index.jsx";
import api from "../../../../../../services/api.js";
import { toast } from "react-toastify";

function Apartament(){
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
        <TitleAdd data={'Todos os apartamentos'}/> 
        {categorias?.map((item_, index_)=>(
            <>
            <section key={index_} className="category-name">
            <Link to="#" key={index_}> {item_.title} ({item_?.apartaments?.length}) </Link>
            </section>

            <Style.Content key={index_}>
            {item_?.apartaments?.map((item, index)=>(
                <Style.Card key={index}>
                    <img key={index}  src={item?.image[0]?.url} />
                    <p key={index}>
                        {item?.description}
                    </p>
                    <section key={index}>
                        <DescApartamento  apartamentId={item?.id}/>
                    <span key={index}>$<span key={index}>
                        {item?.price}
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