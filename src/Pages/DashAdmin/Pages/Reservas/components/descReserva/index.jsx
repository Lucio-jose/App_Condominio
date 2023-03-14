import React, { useState } from "react";
import Search from "./style";
import Img from "../../../../../../images/image.png"

function DescReserva() {
  const [bar, setBar] = useState("none");
  return (
    <Search bar={bar}>
      <button
        onClick={() => {
          bar === "flex" ? setBar("none") : setBar("flex");
        }}
      >
        Ver detalhe
      </button>

      <div>
        <button
          onClick={() => {
            bar === "flex" ? setBar("none") : setBar("flex");
          }}
        >
          CLOSE
        </button>
        <h2> Dados da Reserva </h2>
        <form action="" method="">
          <fieldset>
            <section>
            <h3>Nome do Cliente*</h3>
            <span>Abel José da Silva</span>
            </section>

            <section>
            <h3>N. BI*</h3>
            <span>00238343LA056</span>
            </section>

            <section>
            <h3>Number*</h3>
            <span>92X XXX XXX</span>
            </section>

            <section>
            <h3>Email</h3>
            <span>client23@gmail.com</span>
            </section>
            </fieldset>

            <fieldset>
            <section>
            <h3>Tipo de Contrato*</h3>
            <span>Aluguer</span>
            </section>

            <section>
            <h3>Apartamento</h3>
            <span>T2</span>
            </section>

            <section>
            <h3>Duração</h3>
            <span>12 meses</span>
            </section>

            <section>
            <h3>Pagamento</h3>
            <span>Link para o arquivo PDF</span>
            </section>
            </fieldset>

            <fieldset>
            <section className="sectionDescription">
            <h3>Descrição</h3>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum cumque facere cupiditate aut distinctio quisquam eaque accusantium ex, alias provident corporis modi minus ullam cum maiores! Quas esse reiciendis in?</span>
            </section>
            </fieldset>

            <fieldset>
            <section className="sectionFile">
              <h3>Imagens do Apartamento*</h3>
              <div>
               <img src={Img} alt="" />
               <img src={Img} alt="" />
               <img src={Img} alt="" />
              </div>
            </section>
            </fieldset>
            <div className="Btnss">
            <button>Validar</button> 
            <button id="btndelec">Eliminar</button>  
            </div>    
        </form>
      </div>
    </Search>
  );
}

export default DescReserva;
