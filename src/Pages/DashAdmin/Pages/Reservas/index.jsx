
import React from 'react';
import { Container, BodyDash } from '../../style/style';
import * as S from './style'
import Sucess ,{Agenda} from './data';
import Menu from '../../Components/Menu';
import HeadDash from '../../Components/HeadDash';
import DescReserva from './components/descReserva';

function Reservas() {
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
                    <h3>Agendas Pendentes</h3>
                    {
                      Agenda.map((item, index)=>(
                        <div key={index} className="contentRight">
                        <section key={index} className="testanto">
                          <span key={index}>Desde: {item.desde}</span>
                          <span key={index}>Para: {item.ate}</span>
                        </section>
                        <section id='center' key={index} className="testanto">
                          <h5 key={index}>{item.user}</h5>
                          <span key={index}>{item.prodct}</span>
                        </section>
                        <section key={index} className="testanto">
                          <button key={index} id="btn1">{item.bnt}</button>
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
export default Reservas;
