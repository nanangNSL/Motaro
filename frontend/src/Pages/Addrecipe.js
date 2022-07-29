import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import NavBar from "../components/Navbar";
import Footer from "../components/footer/Footer";
import axios from "axios";

const Addrecipe = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [Inggredients, setInggredients] = useState("");
  const [video, setVideo] = useState("");

  console.log(image);
  const UploadRecipe = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/recipe/insert", {
        image: image,
        title: title,
        Inggredients: setInggredients,
        video: video,
      });
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <NavBar />
      <Container className="contaner-add-recipe">
        <Col md={7}>
          <Form onSubmit={UploadRecipe}>
            <Form.Group>
              <Form.Control
                type="file"
                id="file"
                value={image}
                onChange={(event) => setImage(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                placeholder="Title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Inggredients"
                value={Inggredients}
                onChange={(event) => setInggredients(event.target.value)}
              />
              <Form.Group className="mt-3">
                <Form.Control
                  type="text"
                  placeholder="video"
                  value={video}
                  onChange={(event) => setVideo(event.target.value)}
                />
              </Form.Group>
            </Form.Group>
            <Col className="col-bottom">
              <Button className="button-post border-0" type="submit">
                Post
              </Button>
            </Col>
          </Form>
        </Col>
      </Container>
      <Footer />
    </>
  );
};

export default Addrecipe;
