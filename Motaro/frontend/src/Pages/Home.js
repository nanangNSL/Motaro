import React from "react";
import NavBarHome from "../components/NavbarHome";
import JumbrotonPopular from "../components/jumbroton/JumbrotonPopular";
import "../style/Style.css";
import Footer from "../components/footer/Footer";
import JumbrotonNew from "../components/jumbroton/JumbrotonNew";
import JumbrotonGrid from "../components/jumbroton/JumbrotonGrid";
import Carousel from "../components/Carousell"

const Home = () => {
  return (
    <>
      <NavBarHome />
      <Carousel/>
      <JumbrotonPopular /> 
      <JumbrotonNew/>
      <JumbrotonGrid/>
      <Footer />
    </>
  );
};

export default Home;
