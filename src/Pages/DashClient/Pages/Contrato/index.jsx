
import React, { useEffect, useState } from 'react';
import { Container, BodyDash } from '../../style/style';
import * as S from './style'
import Sucess ,{Agenda} from './data';
import Menu from '../../Components/Menu';
import HeadDash from '../../Components/HeadDash';
import DataContrato from './components/dataContrato';
import { dataUser } from '../../../../services/auth';
import api from '../../../../services/api';

function Contrato() {

  const [contratos,setContratos]=useState()
const [contratosCancledos, setContratosCancelados]=useState()

  const getContratos= async()=>{
     const user= await dataUser()
     await api.get("/rents").then((res)=>{
      console.log("MEUS CONTRATOS EM ANDAMENTO",res.data);
      setContratos(res.data)

     }).catch(({response})=>{
      console.log("errro",response);
   
     })
  }

  const getContratosExpirados= async()=>{
    const user= await dataUser()
    await api.get("/rents").then((res)=>{
     console.log("Meus contratos expirados",res.data);
     setContratosCancelados(res.data)

    }).catch(({response})=>{
     console.log("erro",response);
  
    })
 }

  const handleImprimirContrato=async(url)=>{
   window.location.replace(url).print()
  }

  useEffect(()=>{
    getContratos()
    getContratosExpirados()
  },[])
  return (
      <>
        <Container>
            <Menu/>
            <BodyDash>
                <HeadDash/>
                <S.AreaTitle>
                  <S.Content>
                  <h3>Meus Contratos</h3>
                  </S.Content>
                </S.AreaTitle>
                
                <S.Container>
                  <S.SideLeft>
                    <h3>Contratos Expirados</h3>

                    {contratos?.rows.map((item, index)=>(
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
                    <h3>Contratos em Curso  ({contratos?.count})</h3>
                    {
                      contratos?.count>0?<>{
                       contratos?.rows?.map((item, index)=>(
                        <div key={index} className="contentRight">
                        <section key={index} className="testanto">
                          <span key={index}>Desde: {new Date(item?.created_at).toLocaleDateString('pt-pt',{dateStyle:'full'})}</span>
                          <span key={index}>Para:{new Date(item?.come_out_at).toLocaleDateString('pt-pt',{dateStyle:'full'})}</span>
                        </section>
                        <section id='center' key={index} className="testanto">
                         <img src={item?.apartaments[index]?.image[0]?.url}/>
                         <section>
                          <h5 key={index}>{dataUser()?.user?.name}</h5>
                          <span key={index}>Duração:{item?.stay_duration} meses<br/>TIPO:{item?.apartaments[index]?.finality?.title}</span>
                          <span key={index}>Tipologia:{item?.apartaments[index]?.typping?.title}<br/>Dimensao{item?.apartaments[index]?.size?.title}</span>
                        </section>
                        </section>
                         <section key={index} className="testanto">
                          <button key={index} onClick={()=>handleImprimirContrato(item?.accourd?.url)} id="btn1">Visualizar</button>
                          <DataContrato/>
                        </section>
                      </div>
                      ))}
                      </>:
                      <strong> Não  tens nenhum contrato em curso</strong>
                    }
                  </S.SideRight>
                </S.Container>
            </BodyDash>
        </Container>
      </>
  );
}
export default Contrato;
