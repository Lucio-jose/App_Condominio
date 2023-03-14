
import React from 'react';
import { Container, BodyDash } from '../../style/style';
import * as S from './style'
import Sucess ,{Agenda, Apartamentdata} from './data';
import Menu from '../../Components/Menu';
import HeadDash from '../../Components/HeadDash';
import DataContrato from './components/dataContrato';

function Contratos() {
  return (
      <>
        <Container>
            <Menu/>
            <BodyDash>
                <HeadDash/>
                <S.AreaTitle>
                  <S.Content>
                  <h3>Todas Contratos</h3>
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
                    <h3>Contratos em Curso</h3>
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
