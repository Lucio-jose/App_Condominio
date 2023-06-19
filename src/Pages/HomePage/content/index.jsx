import React, { useEffect } from "react";
import { Container, Content } from "../../../Styles/Front";
import { SlidingHome } from "../../../Components/Sliders";
//import Noticias from "./data/Noticias";
// import TesteVocacional from "./data/Teste Vocacional";
//import Universities from "./data/Universities";
import Contacto from "./data/Contacto";
import TipoApartamento from "./data/TipoServico";
import About from "./data/About";
import Apartamentos from "./data/Apartamentos";
import api from "../../../services/api";

export default function FirstView() { 
  useEffect(async() => {
  await  api.get("/apartaments");
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
