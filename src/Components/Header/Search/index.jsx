import React, { useState } from "react";
import Search from "./styles";

function Searching() {
  const [bar, setBar] = useState("none");
  return (
    <Search bar={bar}>
      <button
        onClick={() => {
          bar === "flex" ? setBar("none") : setBar("flex");
        }}
      >
        <i className="fas fa-search" />
      </button>

      <div>
        <button
          onClick={() => {
            bar === "flex" ? setBar("none") : setBar("flex");
          }}
        >
          {" "}
          <i className="fas fa-times-circle"></i>{" "}
        </button>
        <h1> Pesquisar </h1>

        <div>
          <input type="text" placeholder="Digite aqui para pesquisar.!" />
          <button>
            {" "}
            Pesquisar <i className="fas fa-search"> </i>{" "}
          </button>
        </div>

        <ul>
          <h1> Itens Mais pesquisados</h1>
          <li> Trabalhos em Angola</li>
          <li> Maior salario em Angola </li>
          <li> Como se tornar empresario </li>
          <li> Como encontrar emprego muito rapido </li>
        </ul>
      </div>
    </Search>
  );
}

export default Searching;
