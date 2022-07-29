import React from "react";
import Card from "react-bootstrap/Card";
import { useMediaQuery } from "react-responsive";

const BannerNew = () => {
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 428 });
    return isMobile ? children : null;
  };
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 429 });
    return isNotMobile ? children : null;
  };
  return (
    <>
      <Mobile>
        <Card body className="banner-new-mobile">
          <h1 style={{ fontSize: "20px" }}>New Recipe</h1>
        </Card>
      </Mobile>
      <Default>
        <Card body className="banner-pop">
          <h1 style={{ fontSize: "30px" }}>New Recipe</h1>
        </Card>
      </Default>
    </>
  );
};

export default BannerNew;
