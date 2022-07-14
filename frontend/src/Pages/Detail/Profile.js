import React from "react";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/Navbar";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import popular from "../../style/images/detail.png";
import gambar1 from "../../style/images/popular.png";
import { HiSaveAs } from "react-icons/hi";
import { BiLike } from "react-icons/bi";
import Nav from 'react-bootstrap/Nav';

const profile = () => {
  return (
    <>
      <Container className="bg-new" fluid>
        <Container>
          <NavBar />
          <Card className="border-0 ms-2 bg-transparent">
            <Card.Header className="container-detail border-0">
              <Card className="image-recipe">
                <Card.Img src={popular} />
                <Card.Title className="bottom-left">
                  <HiSaveAs />
                  <BiLike />
                </Card.Title>
              </Card>
            </Card.Header>
            <Card.Header>
              <Nav variant="tabs" defaultActiveKey="#first">
                <Nav.Item>
                  <Nav.Link href="/">My Recipe</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/">Save Recip</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/" >
                    Like Recipe
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
            <Card style={{ width: "20rem" }} className="image-popular">
              <Card.Img variant="top" src={gambar1} />
              <Card.Title className="bottom-pop">Card Title</Card.Title>
            </Card>
            </Card.Body>
          </Card>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default profile;
