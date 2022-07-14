import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import gambar1 from "../../style/images/popular.png";
import Banner from "../Banner";

const jumbrotonPopular = () => {
  return (
    <Container fluid className="bg-pop">
      <Row>
        <Col sm={8} className="jumbroton-popular">
          <Banner />
          <Row>
            <Col className="col-popular">
              <Card style={{ width: "22rem" }} className="image-popular">
                <Card.Img variant="top" src={gambar1} />
                <Card.Title className="bottom-left">Card Title</Card.Title>
              </Card>
              <Card style={{ width: "22rem" }} className="image-popular">
                <Card.Img variant="top" src={gambar1} />
                <Card.Title className="bottom-left">Card Title</Card.Title>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default jumbrotonPopular;
