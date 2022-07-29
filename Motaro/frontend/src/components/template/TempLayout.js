import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
const tempLayout = () => {
  return (
    <Container fluid className="container-pagehome d-flex">
      <Row className="col-template-8">
        <Col className="col-md-12 col-templatee">
        </Col>
      </Row>
      <Row className="col-4 yellow-front">
        <Col className="col-md-12 col-template"></Col>
      </Row>
    </Container>
  );
};

export default tempLayout;
