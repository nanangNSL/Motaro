import React,{ useState} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Avatar from "../style/images/avatar.png";
import Button from "react-bootstrap/Button";
import "../style/Style.css";
import { BiLogIn } from "react-icons/bi";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

const NavbarHome = () => {
  const navigate = useNavigate("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const authLogin = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_END_POINT_TOKEN}`
      );
      if (response.data) {
        navigate("add");
      }
    } catch (error) {
      if (error.response) {
        handleShow();
      }
    }
  };

  const authProfile = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_END_POINT_TOKEN}`
      );
      if (response.data) {
        navigate("add");
      }
    } catch (error) {
      if (error.response) {
        handleShow();
      }
    }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="">You have to login first</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          Not Now
          </Button>
          <Link to="/login"> <Button variant="primary">Lets Login</Button></Link>
         
        </Modal.Footer>
      </Modal>
      <Container fluid className="sticky-top bg-nav shadow ">
        <Navbar expand="sm">
          <Container>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0 myColor ms-4"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="/" className="colorNav">
                  Home
                </Nav.Link>
                <Nav.Link onClick={authLogin} className="colorNav">
                  Add Recipe
                </Nav.Link>
                <Nav.Link onClick={authProfile} className="colorNav">
                  Profile
                </Nav.Link>
              </Nav>
              <Navbar.Collapse className="justify-content-end">
                <img
                  src={Avatar}
                  alt={"avatarIcon"}
                  width={30}
                  height={30}
                  className="rounded-circle"
                />
                <Link to="/login">
                  {" "}
                  <Button
                    variant="outline-primary"
                    className="ms-3 btn-sm btn-bar"
                  >
                    Login
                    <BiLogIn />
                  </Button>
                </Link>
              </Navbar.Collapse>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default NavbarHome;
