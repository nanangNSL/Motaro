import React, { useState } from "react";
import login from "../../style/images/login.png";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import axios from "axios";
import "../../style/Style.css";
import { useDispatch } from "react-redux";
import * as Type from "../../redux/user/type";

const LoginMobile = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Auth = async (event) => {
    event.preventDefault();
    await axios
      .post(`${process.env.REACT_APP_END_POINT_LOGIN}`, {
        email: email,
        password: password,
      })
      .then(() => {
        dispatch({
          type: Type.SET_USER,
          payload: {
            user: true,
          }
        })
        navigate("/");
        Swal.fire("Good job!", "Login", "success");
      })
      .catch((error) => {
        if (error.response) {
          setMsg(error?.response?.data?.msg);
        }
        if (msg) {
          Swal.fire("Sorry", msg, "error");
        }
      });
  };

  return (
    <>
      <Container className="container-login-mobile">
        <Form onSubmit={Auth}>
          <Card.Img src={login} alt={"motaro"} className="image-login" />
          <Card className="text-center border-0">
            <Card.Body>
              <Card.Title className="title-login">Welcome</Card.Title>
              <Card.Text className="title-text">
                Log in into your exiting account
              </Card.Text>
              <hr className="" />
            </Card.Body>
          </Card>
          <Form.Group className="mini-text">
            <Form.Label className="label-login">Email address</Form.Label>
            <input
              className="input-mobile"
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
              className="input-mobile"
              type="password"
              placeholder="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>
          <Form.Check
            className="check-mobile"
            type="checkbox"
            label="I agree to terms & conditions"
          />
          <Button type="submit" className="btn-mobile-login">
            Login
          </Button>
          <div className="mini-text-mobile">
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
      </Container>
    </>
  );
};

export default LoginMobile;
