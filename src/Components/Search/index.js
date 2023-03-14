import React from "react";
import styled from "styled-components";
import search from "../../images/search.svg";

export const Search = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  width: 600px;

  position: relative;
  box-sizing: border-box;

  border: 3px;
  color: #fff;
  background: #232323;
  background-clip: padding-box;
  border: solid 3px transparent;
  border-radius: 1em;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -3px;
    border-radius: inherit;
    background: linear-gradient(to right bottom, #00e0ff, rgba(0, 0, 0, 0.63));
  }

  h3 {
    background: transparent;
    border-right: 0;
    padding: 5px 10px;
    font-size: 12px;
    font-weight: 600;
    height: 36px;
    display: flex;
    align-items: center;
    text-transform: uppercase;

    i {
      margin: 0 10px;
    }
  }

  input {
    background: transparent;
    padding: 5px 5px 5px 35px;
    color: #ffffff;
    transition: all 0.6s;
    background: url(${search}) no-repeat;
    background-position: 3% 50%;
    height: 36px;
    width: 50%;
    border: none;
    font-size: 16px;
  }

  button {
    height: 36px;
    padding: 5px 10px;
    border-left: 0;
    background: #36ccfc;
    text-transform: uppercase;
    width: 30%;
    border-radius: 10px;
    border: none;
    cursor: pointer;
  }
`;

const Pesquisar = ({ aonde }) => {
  return (
    <Search>
      <h3>
        {aonde} <i className="fas fa-arrow-right"></i>
      </h3>
      <input type="search" placeholder="Escreva para pesquisar" />
      <button>
        <i className="fas fa-search"></i> Pesquisar
      </button>
    </Search>
  );
};

export { Pesquisar };
