import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../../../services/api";
import { Container } from "./styles";

function Noticias() {
  const [noticias, setNoticias] = useState("");

  useEffect(
    () => GetData(),
    //eslint-disable-next-line
    []
  );

  async function GetData() {
    await api
      .get(`/noticias`)
      .then((response) => {
        setNoticias(response.data);
        console.log("noticia => ", response);
      })
      .catch(({ response }) => console.warn("Error => ", response));
  }

  return (
    <Container>
      <h1>Artigos e Noticias</h1>

      <ul>
        {noticias &&
          noticias.map((item) => (
            <li key={item.id}>
              <div>
                <Link to={`/noticias/${item.id}`}>
                  <h4>{item.title}</h4>
                </Link>
                <Link to={`/noticias/${item.id}`}></Link>
                <ul>
                  <li>
                    {" "}
                    <Link to={`/noticias/${item.id}`}> Admin </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to={`/noticias/${item.id}`}>
                      {" "}
                      {moment(item.createdAt).format("MMM D, YYYY")}{" "}
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to={`/noticias/${item.id}`}>
                      {" "}
                      Comments {item.Comments.length}
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          ))}
      </ul>
    </Container>
  );
}

export default Noticias;
