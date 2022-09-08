import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import NavBarHome from "../components/NavbarHome";
import JumbrotonPopular from "../components/jumbroton/JumbrotonPopular";
import "../style/Style.css";
import Footer from "../components/footer/Footer";
import JumbrotonNew from "../components/jumbroton/JumbrotonNew";
import JumbrotonGrid from "../components/jumbroton/JumbrotonGrid";
import Carousel from "../components/Carousell"
import { useSelector } from "react-redux";


const Home = () => {
  const { user} = useSelector((state) => state)
  let checkUser;
  if(user?.user?.user){
    checkUser = user?.user?.user
  }else{
    checkUser = user?.user?.user
  }

  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if(checkUser === true && checkUser !== null){
        refreshToken();
    }
  },[]);

  const refreshToken = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_END_POINT_TOKEN}`);
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate("/");
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 > currentDate.getTime()) {
        const response = await axios.get(`${process.env.REACT_APP_END_POINT_TOKEN}`);
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwtDecode(response.data.accessToken);
        setExpire(decoded.exp);
      
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

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
