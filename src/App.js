import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Scroll from "./Components/ScrollTop";
import { ColorsProvider } from "./Context/Context";
import Routes from "./routes";
import "./Styles/fontawesome-all.css";
import GlobalStyles from "./Styles/globalStyles.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <ColorsProvider>
          <GlobalStyles />
          <Routes />
          <Scroll />
          <ToastContainer className="ToastContainer" />
        </ColorsProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
