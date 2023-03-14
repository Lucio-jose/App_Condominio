import React from "react";
import { Link } from "react-router-dom";
import { FooterTag } from "./styles";

function Footer() {
  return (
    <>
      <FooterTag>
        <div>
          <h2>About</h2>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i> Avenida Brazil nº 423,
              Luanda Angola
            </li>
            <li>
              <i className="fas fa-phone"></i> +244 940 245 416 | +244 949 112
              166
            </li>
            <li>
              <i className="fas fa-envelope"></i> condominioangolano@gmail.com
            </li>
            <li>
              <span>
                <a href="/">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </span>
              <span>
                <a href="/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </span>
              <span>
                <a href="/">
                  <i className="fab fa-github"></i>
                </a>
              </span>
              <span>
                <a href="/">
                  <i className="fab fa-twitter"></i>
                </a>
              </span>
              <span>
                <a href="/">
                  <i className="fab fa-pinterest"></i>
                </a>
              </span>
              <span>
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
              </span>
            </li>
            <li>
              <Link to="/about"> More Info </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>What can you do here??</h2>
          <ul>
            <li> Discovery Your Vocation</li>
            <li> Discovery Best Job for You</li>
            <li> Know Where you should Study </li>
            <li> Know Better your skills</li>
            <li> Know your Habilities</li>
          </ul>
        </div>
        <div>
          <h2>NewsLetter</h2>
          <p>
            Subscribe into Our NewsLetter and Receive Notifications all days
            about new vocations discovered, works and so on...
          </p>
          <input type="text" placeholder="Name" />
          <input type="emal" placeholder="Email" />
          <button type="button">Subscribe</button>
        </div>
        <span>
          Copyright &copy; 2021 - All Rigths Reserved - DLine Code 2021 by
          condominio77
        </span>
      </FooterTag>
    </>
  );
}

export default Footer;
