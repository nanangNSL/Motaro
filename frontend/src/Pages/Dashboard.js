import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Navbar from "../components/Navbar"
import TempLayout from "../components/template/TempLayoutWhite";
import Jumbroton from "../components/jumbroton/JumbrotonWhite";
import Footer from "../components/footer/Footer";
import JumbrotonNew from "../components/jumbroton/JumbrotonNew";
import JumbrotonPopular from "../components/jumbroton/JumbrotonPopular";
import JumbrotonGrid from "../components/jumbroton/JumbrotonGrid";



const Dashboard = () => {
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  });

  const refreshToken = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_END_POINT_TOKEN}`);
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      console.log(JSON.stringify(decoded));
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

  // const getUsers = async () => {
  //   const response = await axiosJWT.get("http://localhost:5000/token", {
  //     headers: {
  //       Authorization: `bearer ${token}`,
  //     },
  //   });
  //   console.log(response.data);
  // };

  return (
    <>
    <TempLayout/>
     <Navbar/>
      <Jumbroton/> 
      <JumbrotonPopular/>
      <JumbrotonNew/>
      <JumbrotonGrid/>
      <Footer />
    
    </>
  );
};

export default Dashboard;
