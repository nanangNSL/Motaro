import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Avatar from "../style/images/avatar.png";
import Button from "react-bootstrap/Button";
import "../style/Style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useMediaQuery } from "react-responsive";
import { BiHomeAlt, BiAddToQueue, BiLogIn  } from "react-icons/bi";
import { BsFillChatFill, BsPerson } from "react-icons/bs";

const NavbarHome = () => {
  const navigate = useNavigate("");

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 400 });
    return isMobile ? children : null;
  };
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 401 });
    return isNotMobile ? children : null;
  };
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
        Swal.fire("Please login", error.response, "info");
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
        Swal.fire("Please login", error.response, "info");
      }
    }
  };

  return (
    <>
      <Mobile>
        <Container className="sticky-top bg-light shadow position-fixed top-100 start-50 translate-middle navbar-mobile">
          <Navbar>
            <Nav>
              <Button onClick={authLogin} className="btn-mobile">
                <BiHomeAlt className="icon" />
              </Button>
              <Button onClick={authLogin} className="btn-mobile">
                <BiAddToQueue className="icon" />
              </Button>
              <Button className="btn-mobile">
                <BsFillChatFill className="icon" />
              </Button>
              <Button onClick={authProfile} className="btn-mobile">
                <BsPerson className="icon" />
              </Button>
            </Nav>
          </Navbar>
        </Container>
      </Mobile>
      <Default>
        <Container fluid className="sticky-top bg-nav shadow">
          <Navbar expand="sm" id="nav-togle">
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
      </Default>
    </>
  );
};

export default NavbarHome;
