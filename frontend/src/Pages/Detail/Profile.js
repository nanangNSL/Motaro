import React from "react";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/Navbar";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import popular from "../../style/images/avatar.png";
import gambar1 from "../../style/images/popular.png";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsFillPencilFill } from "react-icons/bs";

const profile = () => {
  return (
    <>
      <Container className="bg-white" fluid>
        <Container>
          <NavBar />
          <Card className="border-0 ms-2 bg-transparent">
            <Card.Header className="container-detail border-0">
              <Card className="card-profile border-0 bg-transparent">
                <Card.Img src={popular} className="image-profile" />
                <Card.Text className="name-profile">Motaro</Card.Text>
                <NavDropdown
                  title={<BsFillPencilFill className="icon-pen" />}
                  id="basic-nav-dropdown"
                  className="pen-profile"
                >
                  <Button className="button-profile">
                    Change Photo Profile
                  </Button>
                  <Button className="button-profile">Change Password</Button>
                </NavDropdown>
              </Card>
            </Card.Header>
            <Card.Header className="border-0 bg-transparent color-bar">
              <Nav variant="tabs" defaultActiveKey="#first">
                <Nav.Item>
                  <Nav.Link className="color-bar" href="/">
                    My Recipe
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="color-bar" href="/">
                    Save Recipe
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="color-bar" href="/">
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
