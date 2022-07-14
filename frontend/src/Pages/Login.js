import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import axios from "axios";
import "../style/Style.css";
import cooke from "../style/images/cooke.png";


import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Auth = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_END_POINT_LOGIN}`, {
        email: email,
        password: password,
      });
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <Container fluid className="custom-bg">
      <Row className="justify-content-center  p-5">
        <Col className="col-md-3 mt-5 d-flex justify-content-center col-login">
          <img src={cooke} alt={"cooke ada"} className="img-cooke" />
        </Col>
        <Col className="col-md-3 d-flex  mt-5 col-login-1 border">
          <Form onSubmit={Auth}>
            <Card className="text-center border border-0">
              <Card.Body>
                <Card.Title className="title-login">Welcome</Card.Title>
                <Card.Text className="title-text">
                  Log in into your exiting account
                </Card.Text>
                <Card.Text className="fs-6">{msg}</Card.Text>
                <hr className="hr-title" />
              </Card.Body>
            </Card>
            <Form.Group className="mini-text">
              <Form.Label className="label-login">Email address</Form.Label>
              <Form.Control
                className="input-login"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>
            <></>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="label-login">Password</Form.Label>
              <Form.Control
                className="input-login"
                type="password"
                placeholder="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mini-text" controlId="formBasicCheckbox">
              <Form.Check
                className="input-checkbox"
                type="checkbox"
                label="I agree to terms & conditions"
              />
            </Form.Group>
            <Button className=" botton-x" type="submit">
              Login
            </Button>
            <div className="d-flex justify-content-end mini-text">
              <p>Forgot Password?</p>
            </div>
            <hr className="hr-login" />
            <Card.Text className="card-name">
              Don’t have an account?
              <a
                className="link-down"
                href={process.env.REACT_APP_PATH_REGISTER}
                style={{ color: "#EFC81A" }}
              >
                Sign Up
              </a>
            </Card.Text>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
