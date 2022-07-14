import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import gambar1 from "../../style/images/popular.png";
import BannerNew from "../BannerNew";
import Button from "react-bootstrap/esm/Button";

const JumbrotonNew = () => {
  return (
    <Container fluid className="bg-new">
      <Row>
        <Col sm={6} className="">
          <BannerNew />
          <Row >
            <Col className="jumbroton-new">
              <Card style={{ width: "25rem"}} className="bg-yellow"></Card>
              <Card style={{ width: "30rem" }} className="image-new">
                <Card.Img variant="top" src={gambar1} />
              </Card>
            </Col>
            <Col></Col>
          </Row>
        </Col>
        <Col sm={6}>
          <Row >
            <Col>
              <Card.Body className="card-bodyNew">
                <Card.Title className="card-titleNew">Healthy Bone Broth Ramen (Quick & Easy)</Card.Title>
                <hr className="lineNew"/>
                <Card.Text  >Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!
                </Card.Text>
                <Button className="btn-new">Learn More</Button>
              </Card.Body>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default JumbrotonNew;
