import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import "../../style/Style.css";

const Footer = () => {
  return (
    <Container fluid className="container-footer">
      <Card className="text-center border border-0 cardFooter ">
        <Card.Body>
          <Card.Title className="align-middle font-bnb">
            Eat, Cook, Repeat
          </Card.Title>
          <Card.Text className="textFooterTop">
            Share your best recipe by uploading here !
          </Card.Text>
          <Card.Text>
            <Nav className="text-center textFooterButtom">
              <Nav.Link href="/" className="textColorFooter">
                Product
              </Nav.Link>
              <Nav.Link href="/" className="textColorFooter">
                Company
              </Nav.Link>
              <Nav.Link href="/" className="textColorFooter">
                Learn more
              </Nav.Link>
              <Nav.Link href="/" className="textColorFooter">
                Get in touch
              </Nav.Link>
            </Nav>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Footer;
