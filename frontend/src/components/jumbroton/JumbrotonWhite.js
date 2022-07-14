import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bg from "../../style/images/bg.png";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

const JumbrotonWhite= () => {
  return (
    <Container>
      <Row>
        <Col md={5}>
          <Row>
            <Form className="form-jumbroton  ms-5">
              <Card className="text-start font-card-white border-0">
                <Card.Text className="title-size">Discover Recipe</Card.Text>
                <Card.Text className="title-size">& Delicious Food</Card.Text>
              </Card>
              <Form.Control
                type="search"
                placeholder="Search . . ."
                className="me-5 mt-3 search-form "
                aria-label="Search"
              />
            </Form>
          </Row>
        </Col>
        <Col sm={6}>
          <img src={bg} alt={bg} className="bg-1 mt-1 ms-5" />
        </Col>
      </Row>
    </Container>
  );
};

export default JumbrotonWhite;
