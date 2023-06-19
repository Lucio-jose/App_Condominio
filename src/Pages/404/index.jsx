import React from "react";
import logo from "../../images/icons-dash/alert-triangle.svg";
import { PageNotFound } from "./styles";

const NotFound = () => {
  return (
    <>
      <PageNotFound>
        <h1>Página indisponível</h1>

        <img src={logo} alt="Logo do BGOLDEN" />
      </PageNotFound>
    </>
  );
};

export default NotFound;
