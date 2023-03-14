import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import career from "../../images/career.jpg";
import api from "../../services/api";
import { DestaquesTag } from "./styles";

function Destaques() {
  async function GetData() {
    try {
      const response = await api
        .get("/noticias")
        .then(console.log("Sucesso Ao Receber => "))
        .catch((error) => console.error(error));

      if (response) {
        setNews(response.data);
        console.log("Destaques => ", response);
      }
    } catch (error) {
      console.error(error);
    }
  }
  const [News, setNews] = useState("");

  useEffect(() => {
    GetData();
  }, []);
  return (
    <DestaquesTag>
      <h1>Destaques</h1>

      <ul>
        {News &&
          News.map((item) => (
            <li key={item.id}>
              <Link to={`/noticias/${item.id}`}>
                <img src={career} alt="Carreira Imagem Destaques" />
              </Link>
              <div>
                <Link to={`/noticias/${item.id}`}>
                  <h4>{item.title}</h4>
                </Link>
                <Link to={`/noticias/${item.id}`}>
                  <span> {item.createdAt} </span>
                </Link>
              </div>
            </li>
          ))}
      </ul>
    </DestaquesTag>
  );
}

export default Destaques;
