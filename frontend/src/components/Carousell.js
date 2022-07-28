import Carousel from "react-bootstrap/Carousel";
import Banner from "../style/images/baner.png";
import { useMediaQuery } from "react-responsive";

function Carousell() {
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
        <Carousel className="carousel-mobile">
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={Banner} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={Banner} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Banner} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </Mobile>
      <Default>
        <Carousel>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={Banner} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={Banner} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Banner} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </Default>
    </>
  );
}

export default Carousell;
