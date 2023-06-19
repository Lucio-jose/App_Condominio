import React from "react";
import Footer from "../../Components/Footer/Footer";
import FirstView from "./content";
import Header from "../../Components/Header/Header";

function Home() {
  return (
    <>
      <Header page="1" />
      <FirstView />
      <Footer />
    </>
  );
}

export default Home;
