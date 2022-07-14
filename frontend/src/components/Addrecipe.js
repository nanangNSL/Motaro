import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const Addrecipe = () => {

 

  return (
    <Container className="contaner-add-recipe">
      <Col md={7}>
        <Form>
          <Form.Group className="mb-3 form-Video border">
            <Form.Label className="label-video">imsage</Form.Label>
            <Form.Control
              type="file"
              className="form-file-video "
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="text"
              placeholder="Title"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Inggredients"
            />
          </Form.Group>
          <Col className="col-bottom">
            <Button
              className="button-post border-0"
              variant="primary"
              type="submit"
            >
              Post
            </Button>
          </Col>
        </Form>
      </Col>
    </Container>
  );
};

export default Addrecipe;
