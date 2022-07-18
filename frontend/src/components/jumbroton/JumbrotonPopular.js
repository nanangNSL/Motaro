import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import gambar1 from "../../style/images/popular.png";
import Banner from "../Banner";

const jumbrotonPopular = () => {
  return (
    <Container fluid className="bg-pop mt-5 border-3 warning">
      <Row className="mt-row border border-3 danger">
        <Col sm={12} className="border border-2 danger">
          <Banner/>
            <Col className="d-flex  mt-5 ms-card">
              <Card style={{ width: "22rem" }} className="m-2" >
                <Card.Img variant="top" src={gambar1} />
                <Card.Title className="bottom-left">Card Title</Card.Title>
              </Card>
              <Card style={{ width: "22rem" }} className="m-2">
                <Card.Img variant="top" src={gambar1} />
                <Card.Title className="bottom-left">Card Title</Card.Title>
              </Card>
              <Card style={{ width: "22rem" }} className="m-2" >
                <Card.Img variant="top" src={gambar1} />
                <Card.Title className="bottom-left">Card Title</Card.Title>
              </Card>
              <Card style={{ width: "22rem" }} className="m-2">
                <Card.Img variant="top" src={gambar1} />
                <Card.Title className="bottom-left">Card Title</Card.Title>
              </Card>
            </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default jumbrotonPopular;
