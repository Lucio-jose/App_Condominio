import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

function Contacto() {
  return (
    <Container>
      <div>
        <h3> Fale Connosco </h3>
        <p>
          Entre em Contacto com a nossa equipe, para ter mais detalhes, mais
          informações, sobre os serviços disponibilizados aqui no About
          Vocaction.
        </p>
        <Link to="/contacto"> Contact us </Link>
      </div>
    </Container>
  );
}

export default Contacto;
