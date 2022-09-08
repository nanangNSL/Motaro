import React from "react";
import { useMediaQuery } from "react-responsive";
import JumbrotonGridDesktop from "../desktop/JumbrotonGridDesktop";
import JumbrotonGridMobile from "../mobile/JumbrotonGridMobile"

const JumbrotonGrid = () => {
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
        <JumbrotonGridMobile/>
       </Mobile>
      <Default>
        <JumbrotonGridDesktop/>
      </Default>
    </>
  );
};

export default JumbrotonGrid;
