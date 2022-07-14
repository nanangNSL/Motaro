import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
const TempLayoutLineYellow = () => {
  return (
    <Container fluid className="border container-line-yellow d-flex">
      <Row className="col-template-1">
        <Col className="col-line-yellow"></Col>
      </Row>
    </Container>
  );
};

export default TempLayoutLineYellow;
