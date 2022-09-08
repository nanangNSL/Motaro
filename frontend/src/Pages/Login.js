import React from "react";
import "../style/Style.css";
import LoginMobile from "../components/mobile/LoginMobile";
import LoginDekstop from "../components/desktop/LoginDekstop";
import { useMediaQuery } from "react-responsive";

const Login = () => {
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 400 });
    return isMobile ? children : null;
  };
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 401 });
    return isNotMobile ? children : null;
  };
  return (
    <>
      <Mobile>
        <LoginMobile/>
      </Mobile>
      <Default>
       <LoginDekstop/>
      </Default>
    </>
  );
};

export default Login;
