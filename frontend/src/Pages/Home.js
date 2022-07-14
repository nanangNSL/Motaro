import React from "react";
import NavBarHome from "../components/NavbarHome";
import TempLayout from "../components/template/TempLayout";
import Jumbroton from "../components/jumbroton/Jumbroton";
import JumbrotonPopular from "../components/jumbroton/JumbrotonPopular";
import "../style/Style.css";
import Footer from "../components/footer/Footer";
import JumbrotonNew from "../components/jumbroton/JumbrotonNew";
import JumbrotonGrid from "../components/jumbroton/JumbrotonGrid";

const Home = () => {
  return (
    <>
    <TempLayout />
      <NavBarHome />
      <Jumbroton />
      <JumbrotonPopular /> 
      <JumbrotonNew/>
      <JumbrotonGrid/>
      <Footer />
    </>
  );
};

export default Home;
