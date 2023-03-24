import React, { useState } from "react";
import Search from "./styles";

function AddApartamento() {
  const [bar, setBar] = useState("none");
  return (
    <Search bar={bar}>
      <button
        onClick={() => {
          bar === "flex" ? setBar("none") : setBar("flex");
        }}
      >
        AD APARTAMENTO
      </button>

      <div>
        <button
          onClick={() => {
            bar === "flex" ? setBar("none") : setBar("flex");
          }}
        >
          FECHAR
        </button>
        <h2> Dados do apartamento </h2>
        <form action="" method="">
          <fieldset>
            <section>
            <h3>Tipologia*</h3>
            <input type="text" name="" id="" />
            </section>

            <section>
            <h3>Nº de quartos*</h3>
            <input type="text" name="" id="" />
            </section>

            <section>
            <h3>Categoria*</h3>
            <select name="" id="">
              <option value="">Destaques</option>
              <option value="">Apartamento</option>
              <option value="">A. Familiar</option>
              <option value="">Escritórios</option>
            </select>
            </section>

            </fieldset>

            <fieldset>

            <section>
            <h3>Tamanho*</h3>
            <input type="text" name="" id="" />
            </section>

            <section>
            <h3>Para*</h3>
            <select name="" id="">
              <option value="">Venda</option>
              <option value="">Aluguer</option>
            </select>
            </section>

            <section>
            <h3>Preço*</h3>
            <input type="text" name="" id="" />
            </section>
            </fieldset>

            <fieldset>
            <section className="sectionDescription">
            <h3>Descrição</h3>
            <input type="text" name="" id="" maxLength="60"/>
            </section>
            </fieldset>

            <section className="sectionFile">
              <h3>Adicionar imagens*</h3>
            <input type="file"/>
            </section>
            <button>Adicionar</button>      
        </form>
      </div>
    </Search>
  );
}

export default AddApartamento;
