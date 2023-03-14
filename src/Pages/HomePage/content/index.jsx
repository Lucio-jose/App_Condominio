import React, { useEffect } from "react";
import socketio from "socket.io-client";
import { Container, Content } from "../../../Styles/Front";
import { SlidingHome } from "../../../Components/Sliders";
//import Noticias from "./data/Noticias";
// import TesteVocacional from "./data/Teste Vocacional";
//import Universities from "./data/Universities";
import Contacto from "./data/Contacto";
import TipoApartamento from "./data/TipoServico";
import About from "./data/About";
import Apartamentos from "./data/Apartamentos";

export default function FirstView() { 
  useEffect(() => {
    const socket = socketio("http://localhost:3333");
    console.log(socket);
  }, []);

  return (
    <>
      <SlidingHome />
      <>
        <Container> 
          <Content>
            <TipoApartamento/>
            <About/>
            <Apartamentos/>
            <Contacto />
          </Content>
        </Container>
      </>
    </>
  );
}
