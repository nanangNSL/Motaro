import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
const TempLayoutWhite = () => {
  return (
    <Container fluid className="border container-white d-flex">
      <Row className="col-template-8">
        <Col className="col-md-12 "></Col>
      </Row>
      <Row className="col-4">
        <Col className="col-md-12 col-template"></Col>
      </Row>
    </Container>
  );
};

export default TempLayoutWhite;
