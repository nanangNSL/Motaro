import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import NavBar from "../components/Navbar";
import Footer from "../components/footer/Footer";

const Addrecipe = () => {
  return (
    <>
      <NavBar />
      <Container className="contaner-add-recipe">
        <Col md={7}>
          <Form>
            <Form.Group>
              <Form.Control type="file" id="file" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="text" placeholder="Title" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control as="textarea" rows={3} placeholder="Inggredients" />
              <Form.Group  className="mt-3" >
                <Form.Control type="file" id="file-video" />
              </Form.Group>
            </Form.Group>
            <Col className="col-bottom">
              <Button className="button-post border-0" type="submit">
                Post
              </Button>
            </Col>
          </Form>
        </Col>
       
      </Container> <Footer/>
    </>
  );
};

export default Addrecipe;
