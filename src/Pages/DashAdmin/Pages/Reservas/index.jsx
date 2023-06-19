
import React, { useEffect, useState } from 'react';
import { Container, BodyDash } from '../../style/style';
import * as S from './style'
import Sucess ,{Agenda} from './data';
import Menu from '../../Components/Menu';
import HeadDash from '../../Components/HeadDash';
import DescReserva from './components/descReserva';
import api from '../../../../services/api';

function Reservas() {
  const [agendamentos,setAgendamentos]=useState()
  const [agendamentosCancledos, setAgendamentosCancelados]=useState()

  const getAgendamentos= async()=>{

     await api.get("/admin/appointments").then((res)=>{
      console.log("MINHAS AGENDAS",res.data);
      setAgendamentos(res.data)

     }).catch(({response})=>{
      console.log("errro",response);
   
     })
  }

  const handleAprovar=async(id)=>{
    const cancelar= window.confirm("tens a certeza que desejas aprovar este agendamento ?")
    
     cancelar && await api.patch(`/admin/appointments/${id}/check`)
 
     getAgendamentos()
   }
useEffect(()=>{
  getAgendamentos()
},[])
  return (
      <>
        <Container>
            <Menu/>
            <BodyDash>
                <HeadDash/>
                <S.AreaTitle>
                  <S.Content>
                  <h3>Todas Reservas</h3>
                  </S.Content>
                </S.AreaTitle>
                
                <S.Container>
                  <S.SideRight>
                    <h3>Agendas Pendentes ({agendamentos?.count})</h3>
                    {
                      agendamentos?.rows?.map((item, index)=>(
                        <div key={index} className="contentRight">
                        <section key={index} className="testanto">
                          <span key={index}>Desde:  {new Date(item?.created_at).toLocaleDateString('pt-pt',{dateStyle:'full'})}</span>
                          <span key={index}>Para: {new Date(item?.come_out_at).toLocaleDateString('pt-pt',{dateStyle:'full'})}</span>
                        </section>
                        <section id='center' key={index} className="testanto">
                          <h5 key={index}>{item?.client?.name}</h5>
                          <span key={index}>Duração:{item?.stay_duration} meses; status: aguardando</span> <br/>
                        </section>
                        <section key={index} className="testanto">
                          <button key={index} onClick={()=> handleAprovar(item?.id)} id="btn1">Aprovar</button>
                          <DescReserva key={item?.id}/> 
                        </section>
                      </div>
                      ))
                    }
                  </S.SideRight>
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
                </S.Container>
            </BodyDash>
        </Container>
      </>
  );
}
export default Reservas;
