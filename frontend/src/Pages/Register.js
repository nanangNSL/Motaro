import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import cooke from "../style/images/cooke.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import signup from "../style/images/signup.png";
import Swal from "sweetalert2";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 400 });
    return isMobile ? children : null;
  };
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 401 });
    return isNotMobile ? children : null;
  };

  const Register = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_END_POINT_USER}`, {
        name: name,
        email: email,
        phonenumber: phonenumber,
        password: password,
        confPassword: confPassword,
      });
      Swal.fire(
        'Good job!',
        'Register!',
        'success'
      )
      navigate("/login");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
      if(msg){
        Swal.fire(
          'Sorry',
          msg,
          ''
        )
      }
    }
  };

  return (
    <>
      <Mobile>
        <Container fluid className="container-login-mobile mt-5">
            
              <Form onSubmit={Register}>
              <Card.Img src={signup} alt={"motaro"} className="image-login" />
                <Card className="text-center border border-0">
              
                  <Card.Title className="title-login">
                    Let’s Get Started !
                  </Card.Title>
                  <Card.Text className="title-text">
                    Create new account to access all features
                  </Card.Text>
                  <hr className="hr-md" />
                </Card>
                <Form.Group className="mini-text" controlId="formBasicName">
                  <Form.Label className="label-login">Name</Form.Label>
                  <Form.Control
                    className="input-mobile"
                    type="text"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mini-text" controlId="formBasicEmail">
                  <Form.Label className="label-login">
                    Email address*
                  </Form.Label>
                  <Form.Control
                    className="input-mobile"
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mini-text" controlId="formBasicNumber">
                  <Form.Label className="label-login">Phone Number</Form.Label>
                  <Form.Control
                    className="input-mobile"
                    type="number"
                    placeholder="Enter Phone Number"
                    value={phonenumber}
                    onChange={(event) => setPhonenumber(event.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mini-text" controlId="formBasicPassword">
                  <Form.Label className="label-login">
                    Create New Password
                  </Form.Label>
                  <Form.Control
                    className="input-mobile"
                    type="password"
                    placeholder="********"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mini-text" controlId="formBasicPassword">
                  <Form.Label className="label-login">New Password</Form.Label>
                  <Form.Control
                    className="input-mobile"
                    type="password"
                    placeholder="********"
                    value={confPassword}
                    onChange={(event) => setConfPassword(event.target.value)}
                  />
                </Form.Group>
            
                  <Form.Check
                    className="check-mobile"
                    type="checkbox"
                    label="I agree to terms & conditions"
                  />
                <Button className="btn-mobile-login" type="submit">
                  Register Account
                </Button>
                <Card className=" border border-0">
                  <Card.Body>
                    <Card.Text>
                      Already have account?
                      <a
                        className="link-down"
                        href={process.env.REACT_APP_END_POINT_LOGIN}
                        style={{ color: "#EFC81A" }}
                      >
                        Log in Here
                      </a>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Form>
        </Container>
      </Mobile>
      <Default>
        <Container fluid className="custom-bg-xl">
          <Row className=" justify-content-center  p-2">
            <Col className="col-md-3 mt-5 d-flex justify-content-center col-login">
              <img src={cooke} alt={"cooke ada"} className="img-cooke-xl" />
            </Col>
            <Col className="col-md-3 d-flex  mt-5 col-login-1 border">
              <Form onSubmit={Register}>
                <Card className="text-center border border-0">
                  <Card.Title className="title-login">
                    Let’s Get Started !
                  </Card.Title>
                  <Card.Text className="title-text">
                    Create new account to access all features
                  </Card.Text>
                  <Card.Text className="title-text">{msg}</Card.Text>
                  <hr className="hr-md" />
                </Card>
                <Form.Group className="mini-text" controlId="formBasicName">
                  <Form.Label className="label-login">Name</Form.Label>
                  <Form.Control
                    className="input-login"
                    type="text"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mini-text" controlId="formBasicEmail">
                  <Form.Label className="label-login">
                    Email address*
                  </Form.Label>
                  <Form.Control
                    className="input-login"
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mini-text" controlId="formBasicNumber">
                  <Form.Label className="label-login">Phone Number</Form.Label>
                  <Form.Control
                    className="input-login"
                    type="number"
                    placeholder="Enter Phone Number"
                    value={phonenumber}
                    onChange={(event) => setPhonenumber(event.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mini-text" controlId="formBasicPassword">
                  <Form.Label className="label-login">
                    Create New Password
                  </Form.Label>
                  <Form.Control
                    className="input-login"
                    type="password"
                    placeholder="********"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mini-text" controlId="formBasicPassword">
                  <Form.Label className="label-login">New Password</Form.Label>
                  <Form.Control
                    className="input-login"
                    type="password"
                    placeholder="********"
                    value={confPassword}
                    onChange={(event) => setConfPassword(event.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className=" mini-text"
                  controlId="formBasicCheckbox"
                >
                  <Form.Check
                    className="input-checkbox"
                    type="checkbox"
                    label="I agree to terms & conditions"
                  />
                </Form.Group>
                <Button className=" botton-x" type="submit">
                  Register Account
                </Button>
                <Card className=" border border-0">
                  <Card.Body>
                    <Card.Text>
                      Already have account?
                      <a
                        className="link-down"
                        href={process.env.REACT_APP_END_POINT_LOGIN}
                        style={{ color: "#EFC81A" }}
                      >
                        Log in Here
                      </a>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Form>
            </Col>
          </Row>
        </Container>
      </Default>
    </>
  );
};

export default Register;
