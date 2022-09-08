import Carousel from "react-bootstrap/Carousel";
import Banner1 from "../style/images/bgbanner1.png";
import Banner2 from "../style/images/bgbanner2.png";
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
            <img className="d-block w-100" src={Banner2} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={Banner1} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Banner2} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </Mobile>
      <Default>
        <Carousel>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={Banner2} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={Banner1} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Banner2} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </Default>
    </>
  );
}

export default Carousell;
