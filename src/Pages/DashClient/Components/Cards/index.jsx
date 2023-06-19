import React, { useEffect, useState } from "react";
import data from './data.js'
import * as Style from './style.js';
import api from "../../../../services/api.js";
import { Link } from "react-router-dom";

function Cards(){
    const [contratos,setContratos]=useState()
    const [reservas, setReservas]=useState()
    const [post,setPost]=useState()
    
      const getContratos= async()=>{
         await api.get("/rents").then((res)=>{
          console.log("MEUS CONTRATOS EM ANDAMENTO",res.data);
          setContratos(res.data)
    
         }).catch(({response})=>{
          console.log("errro",response);
       
         })
      }
      const getPost=async()=>{
        await api.get('/posts').then((res)=>{
            console.table(res.data);
            setPost(res.data)
          })}

      const getReservas= async()=>{
        await api.get("/appointments").then((res)=>{
         console.log("MEUS agendamentos",res.data);
         setReservas(res.data)
   
        }).catch(({response})=>{
         console.log("errro",response);
      
        })
     }
    
     useEffect(()=>{
        getReservas()
        getContratos()
        getPost()
     },[])
return(
    <>
    <Style.Container>
        <Style.Content>
            
                <Style.Card  to='/reservafeita'   id="first" >
                    <Link></Link>
                    <img src={data[0].img} />
                    <h4>Minhas reservas</h4>
                    <p >
                     TOTAL: {reservas?.count}
                    </p>
                </Style.Card>
            
                <Style.Card to='/contratosreading'  id="second" >
                    <img src={data[2].img} />
                    <h4>Meus contratos</h4>
                    <p >
                     TOTAL: {contratos?.count}
                    </p>
                </Style.Card>
                <Style.Card to='/contratosreading'  id="fourth" >
                    <img src={data[3].img} />
                    <h4>Notícias</h4>
                    <p >
                     TOTAL: {post?.length}
                    </p>
                </Style.Card>
        </Style.Content>
        
    </Style.Container>
    </>
)
}
export default Cards;