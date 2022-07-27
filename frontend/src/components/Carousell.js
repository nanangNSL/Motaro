import Carousel from 'react-bootstrap/Carousel';
import Banner from '../style/images/baner.png';

function Carousell() {
  return (
    <Carousel>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={Banner}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={Banner}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousell;