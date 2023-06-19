
import React, { useEffect, useState } from 'react';
import { Container, BodyDash } from '../../style/style';
import * as S from './style'
import Sucess ,{Agenda} from './data';
import Menu from '../../Components/Menu';
import HeadDash from '../../Components/HeadDash';
import DataContrato from './components/dataContrato';
import api from '../../../../services/api';

function Contratos() {
  const [contratos,setContratos]=useState()

  const getContratos= async()=>{

     await api.get("/admin/appointments/check").then((res)=>{
      console.log("APPOINTMENTS",res.data);
      setContratos(res.data)

     }).catch(({response})=>{
      console.log("errro",response);
   
     })
  }

  const handleImprimir=async(url)=>{
    window.location.replace(url) 
     getContratos()
   }
useEffect(()=>{
  getContratos()
},[])
  return (
      <>
        <Container>
            <Menu/>
            <BodyDash>
                <HeadDash/>
                <S.AreaTitle>
                  <S.Content>
                  <h3>Todos Contratos</h3>
                  </S.Content>
                </S.AreaTitle>
                
                <S.Container>
                  <S.SideLeft>
                    <h3>Contratos Expirados</h3>

                    {Sucess.map((item, index)=>(
                      <div key={index}>
                      <section>
                        <h5 key={index}> {item.producto} </h5>
                        <span key={index}>
                          {item.data}
                        </span>
                      </section>
                    </div>  
                    ))
                     
                    }
                  </S.SideLeft>
                  <S.SideRight>
                    <h3>Contratos em Curso ({contratos?.count})</h3>
                    {
                      contratos?.rows?.map((item, index)=>(
                        <div key={index} className="contentRight">
                       <section key={index} className="testanto">
                          <span key={index}>Desde:  {new Date(item?.created_at).toLocaleDateString('pt-pt',{dateStyle:'full'})}</span>
                          <span key={index}>Para: {new Date(item?.come_out_at).toLocaleDateString('pt-pt',{dateStyle:'full'})}</span>
                        </section>
                        <section id='center' key={index} className="testanto">
                          <h5 key={index}>{item?.client?.name}</h5>
                          <span key={index}>Duração:{item?.stay_duration} meses; status: em andamento</span> <br/>
                        </section>
                         
                        <section key={index} className="testanto">
                          <button key={index} onClick={()=>handleImprimir(item?.accourd?.url)} id="btn1">VISUALIZAR</button>
                          <DataContrato/>
                        </section>
                      </div>
                      ))
                    }
                  </S.SideRight>
                </S.Container>
            </BodyDash>
        </Container>
      </>
  );
}
export default Contratos;
