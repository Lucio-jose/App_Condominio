import React from "react";
import { Link } from "react-router-dom";
import career from "../../../images/career.jpg";
import { isAdmin, logout, RemoveUser } from "../../../services/auth";
import { UserLogado } from "./styles";

function UserLogged({ User }) {
  return (
    <UserLogado>
      <div>
        <Link to="/">
          <img src={career} alt="" />
        </Link>
        <div>
          <Link to="/">
            <i className="fas fa-at" />
            {!!User && User.name}
          </Link>
          <Link to="/">
            <i className="fas fa-envelope" /> {!!User && User.email}
          </Link>
          <Link to="/profile">
            <i className="fas fa-user" /> See Profile{" "}
          </Link>
          <Link to="/about">
            <i className="fas fa-ellipsis-v" /> More{" "}
          </Link>
          {isAdmin() && (
            <Link to="/admin">
              <i className="fas fa-chart-line" /> Dashboard{" "}
            </Link>
          )}
          <a
            href="/"
            onClick={() => {
              logout();
              RemoveUser();
            }}
          >
            {" "}
            Log Out{" "}
          </a>
        </div>
      </div>
    </UserLogado>
  );
}
export { UserLogged };
