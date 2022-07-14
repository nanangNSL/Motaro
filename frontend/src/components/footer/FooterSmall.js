import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import "../style/Style.css";

const FooterSmall = () => {
  return (
    <Container fluid className="container-Small">
      <Card className="text-center border-0">
        <Nav className="text-center textFooterButtomSmall">
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
      </Card>
    </Container>
  );
};

export default FooterSmall;
