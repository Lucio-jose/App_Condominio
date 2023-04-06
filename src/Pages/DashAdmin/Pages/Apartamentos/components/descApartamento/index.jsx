import React, { useState } from "react";
import Search from "./style";
import Img from "../../../../../../images/image.png"

function DescApartamento() {
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
        <h2> Dados do Apartamento </h2>
        <form action="" method="">
          <fieldset>
            <section>
            <h3>Tipologia</h3>
            <span contentEditable="true">T2</span>
            </section>

            <section>
            <h3>Nº de quartos</h3>
            <span contentEditable="true">06</span>
            </section>

            <section>
            <h3>Categoria</h3>
            <span contentEditable="true">A.Familiar</span>
            </section>

            </fieldset>

            <fieldset>

            <section>
            <h3>Tamanho</h3>
            <span contentEditable="true">100X50M</span>
            </section>
            <section>
            <h3>Para*</h3>
            <span contentEditable="true">Aluguer</span>
            </section>

            <section>
            <h3>Preço</h3>
            <span contentEditable="true">$10.000/M</span>
            </section>


            </fieldset>

            <fieldset>
            <section className="sectionDescription">
            <h3>Descrição</h3>
            <span contentEditable="true">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum cumque facere cupiditate aut distinctio quisquam eaque accusantium ex, alias provident corporis modi minus ullam cum maiores! Quas esse reiciendis in?</span>
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
            <button>Editar</button> 
            <button id="btndelec">Eliminar</button>  
            </div>    
        </form>
      </div>
    </Search>
  );
}

export default DescApartamento;
