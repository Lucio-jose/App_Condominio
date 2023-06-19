import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

function TesteVocacional() {
  return (
    <Container>
      <h1> Teste Vocacional </h1>

      <p>
        {" "}
        O teste vocacional que seleciona seus aspectos e diz para si qual
        profissão combina com o seu perfil se baseando na teoria de Holland.{" "}
      </p>

      <Link to="testevocacional">
        {" "}
        Fazer o Teste <i className="fas fa-arrow-right" />{" "}
      </Link>
    </Container>
  );
}

function InfoTeste() {
  return (
    <Container>
      <h1> Teste Vocacional </h1>

      <Link to="testevocacional">
        {" "}
        Fazer o Teste <i className="fas fa-arrow-right" />{" "}
      </Link>
    </Container>
  );
}

export { InfoTeste };
export default TesteVocacional;
