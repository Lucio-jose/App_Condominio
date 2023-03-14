import React from "react";
import img2 from "../../../../../images/apartamentos/imgeleven.jpg";
import img3 from "../../../../../images/findsala.jpeg";
import img from "../../../../../images/apartamentos/imgone.jpg"
import { Container } from "./styles";

function TipoApartamento() {
  return (
    <Container>
      <div>
        <img src={img} alt="" />
        <h2>Apartamento de Solteiro</h2>
        <p>
          Temos disponíveis os melhores apartamentos e para solteiros.
        </p>
        <span>$ 800 - $1500</span>
      </div> 
      <div>
        <img src={img2} alt="" />
        <h2>Apartamento Familiar</h2>
        <p>
          Encontre aqui o conforto que torna o seu lar mais feliz.
        </p>
        <span>$ 800 - $1500</span>
      </div>
      <div>
        <img src={img3} alt="" />
        <h2>Escritórios Empresarial</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
        <span>$ 800 - $1500</span>
      </div>
    </Container>
  );
}

export default TipoApartamento;
