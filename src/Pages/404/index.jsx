import React from "react";
import logo from "../../images/logo2.png";
import { PageNotFound } from "./styles";

const NotFound = () => {
  return (
    <>
      <PageNotFound>
        <h1>Page Not Found</h1>

        <img src={logo} alt="Logo do About Vocation" />
      </PageNotFound>
    </>
  );
};

export default NotFound;
