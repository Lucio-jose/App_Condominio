
import React, { useEffect, useState } from 'react';
import { Container, BodyDash } from '../../style/style';
import * as S from './style'
import Sucess ,{Agenda} from './data';
import Menu from '../../Components/Menu';
import HeadDash from '../../Components/HeadDash';
import DescReserva from './components/descReserva';
import { dataUser } from '../../../../services/auth';
import api from '../../../../services/api';

function Reserva() {
const [agendamentos,setAgendamentos]=useState()
const [agendamentosCancledos, setAgendamentosCancelados]=useState()

  const getAgendamentos= async()=>{
     const user= await dataUser()
     await api.get("/appointments").then((res)=>{
      console.log("MINHAS AGENDAS",res.data);
      setAgendamentos(res.data)

     }).catch(({response})=>{
      console.log("errro",response);
   
     })
  }

  const getAgendamentosCancelados= async()=>{
    const user= await dataUser()
    await api.get("/canceled/appointments").then((res)=>{
     console.log("MINHAS AGENDAS CANCELADAS",res.data);
     setAgendamentosCancelados(res.data)

    }).catch(({response})=>{
     console.log("errro",response);
  
    })
 }


  const handleCancelar=async(id)=>{
   const cancelar= window.confirm("tens a certeza que desejas cancelar este agendamento ?")
   
    cancelar && await api.patch(`/appointments/cancel/${id}`)

    getAgendamentos()
  }

  useEffect(()=>{
    getAgendamentos()
    getAgendamentosCancelados()
  },[])
  return (
      <>
        <Container>
            <Menu/>
            <BodyDash>
                <HeadDash/>
                <S.AreaTitle>
                  <S.Content>
                  <h3>Minhas Reservas ({agendamentos?.count})</h3>
                  </S.Content>
                </S.AreaTitle>
                
                <S.Container>
                  <S.SideRight>
                    <h3>Agendas Feitas</h3>
                    {
                      agendamentos?.rows?.map((item, index)=>(
                        <div key={index} className="contentRight">
                        <section key={index} className="testanto">
                          <span key={index}>Desde: {new Date(item?.created_at).toLocaleDateString('pt-pt',{dateStyle:'full'})}</span>
                          <span key={index}>Para: {new Date(item?.come_out_at).toLocaleDateString('pt-pt',{dateStyle:'full'})}</span>
                        </section>
                        <section id='center' key={index} className="testanto">
                          <h4 key={index}>{dataUser()?.user?.name}</h4>
                          {/* <img src={item?.apartaments[index]?.image[0]?.url}></img> */}
                          <span key={index}>Duração:{item?.stay_duration} meses; status: aguardando</span>
                          
                        </section>
                        <section key={index} className="testanto">
                          <button onClick={()=>handleCancelar(item?.id)} key={index} id="btn1">canclelar</button>
                          <DescReserva/> 
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
export default Reserva;
