import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    list-style:  none;
    text-decoration: none;
  }

  p{
    @media (max-width: 568px){
      font-size: small;
    }
  }

  *, button, input{
    background: none;
    border: 0;
    font-family:  "Open Sans", 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, 'Open Sans', Arial, sans-serif;

  }

  body {
    font-family: "Open Sans", 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, 'Open Sans', Arial, sans-serif;
    background: #ffffff;
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
      background: transparent;
      width: 10px;
    }

    ::-webkit-scrollbar-button {
      display: none;
    }

    ::-webkit-scrollbar-thumb {
      background: #36ccfc;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
      background: #191919;
    }

    ::-webkit-scrollbar-track-piece {
      background: transparent;
    }
  }

  #root{
    margin: 0 auto;
    width: 100%;
    max-width: 1768px;
  }

  .ToastContainer{
    z-index: 99999999999;
  }

`;
