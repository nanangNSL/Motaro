import React from "react";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import popular from "../../style/images/detail.png";
import { HiSaveAs } from "react-icons/hi";
import { BiLike } from "react-icons/bi";
import { BsFillPlayBtnFill } from "react-icons/bs";

const Recipe = () => {
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
            <Card.Body>
              <Card.Title>Inggredients</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Voluptatibus aut, dicta consequuntur, qui molestiae
                laudantium delectus fugiat autem vel soluta voluptatum aperiam
                veritatis culpa doloribus, dolore iusto voluptates? Molestiae,
                veritatis!
              </Card.Text>
              <Card.Title>Video Step</Card.Title>
              <div className="button-video">
                <Button className="button-modal">
                  <BsFillPlayBtnFill />
                </Button>
                <Button className="button-modal">
                  <BsFillPlayBtnFill />
                </Button>
                <Button className="button-modal">
                  <BsFillPlayBtnFill />
                </Button>
                <Button className="button-modal">
                  <BsFillPlayBtnFill />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default Recipe;
