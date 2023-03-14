import React, { useState } from "react";
import styled, { css } from "styled-components";

const Up = styled.a`
  position: fixed;
  right: 10px;
  bottom: 10px;
  margin-bottom: -100px;
  ${(props) =>
    props.Y > 10 &&
    css`
      margin-bottom: 0px;
    `}
  background: #232323;
  width: 35px;
  height: 35px;
  line-height: 35px;
  border-radius: 3px;
  text-align: center;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  transition: all 0.7s ease-in-out;

  :hover {
    background: #0036ff;
  }
`;

const Scroll = () => {
  const [Y, setY] = useState(0);

  return (
    <>
      {window.addEventListener("scroll", () => {
        setY(window.scrollY);
      })}

      <Up
        Y={Y}
        onClick={() => {
          window.scrollBy({
            top: -document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }}
      >
        <i className="fa fa-chevron-up"></i>
      </Up>
    </>
  );
};

export default Scroll;
