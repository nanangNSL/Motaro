import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
const TempLayoutFullCollor = () => {
  return (
    <Container fluid className="col-template-full-color d-flex">
      <Row className="col-template-8">
        <Col className="col-md-12 ">
        </Col>
      </Row>
      <Row className="col-4">
        <Col className="col-md-12 col-template-full-color "></Col>
      </Row>
    </Container>
  );
};

export default TempLayoutFullCollor;
