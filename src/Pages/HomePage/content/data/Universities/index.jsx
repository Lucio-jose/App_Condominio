import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import career from "../../../../../images/career.jpg";
import api from "../../../../../services/api";
import { Container } from "./styles";

function Universities() {
  const [universidades, setUniversidades] = useState("");

  async function GetData() {
    const response = await api.get("/universidades");

    if (response) {
      setUniversidades(response.data);
      console.log("universidades => ", universidades);
    }
  }

  useEffect(
    () => GetData(),
    //eslint-disable-next-line
    []
  );

  return (
    <Container>
      <h1> Quartos </h1>
      <ul>
        {universidades &&
          universidades.map((item) => (
            <li key={item.id}>
              <img src={career} alt="" />
              <div>
                <Link to={`/universidades/${item.id}`}>
                  {" "}
                  <h4> {item.name}</h4>{" "}
                </Link>
                <Link to={`/universidades/${item.id}`}>
                  <p> {item.description} </p>
                </Link>
              </div>
            </li>
          ))}
      </ul>
    </Container>
  );
}

export default Universities;
