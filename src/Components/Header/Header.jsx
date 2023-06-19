import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo-1.png";
import { isAuthenticated } from "../../services/auth";
import Searching from "./Search";
import { Head } from "./style";
import { UserLogged } from "./UserLogado";

function Flexible(menu, setMenu) {
  if (menu === "flex") {
    setMenu("none");
  } else if (menu === "none") {
    setMenu("flex");
  }
}

export default function Header({ page }) {
  const [menu, setMenu] = useState("none");
  const [User, setUser] = useState({});

  useEffect(() => {
    isAuthenticated() &&
      setUser(JSON.parse(localStorage.getItem("userLogado")));
  }, []);

  return (
    <Head page={page} menu={menu}>
      <a href="/">
        <img src={logo} alt="Logo em PNG" />
      </a>
      <button onClick={() => Flexible(menu, setMenu)}>
        <i className="fas fa-bars" />
      </button>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/jobs"> Sobre Nós </Link>
            </li>
            <li>
              <Link to="/testevocacional"> Apartamentos</Link>
            </li> 
            <li>
              <Link to="/formation"> Services </Link>
            </li>
            <li>
              <Link to="/noticias"> Contact </Link>
            </li>
          </ul>
        </nav>
        <nav>
          {!isAuthenticated() ? (
            <>
              <Link to="/login"> Entrar </Link>
              <Link to="/signup"> Cadastrar </Link>
            </>
          ) : (
            <UserLogged User={User} />
          )}
          <Searching />
        </nav>
      </div>
    </Head>
  );
}
