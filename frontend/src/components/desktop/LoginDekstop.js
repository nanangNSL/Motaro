import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cooke from "../../style/images/cooke.png";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import * as Type from "../../redux/user/type";
import jwtDecode from "jwt-decode";

const LoginDekstop = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(null);

  const Auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      axios
        .post(`${process.env.REACT_APP_END_POINT_LOGIN}`, {
          email: email,
          password: password,
        })
        .then((res) => {
          const decodeToken = jwtDecode(res?.data?.token);
          if (decodeToken) {
            setUserId(decodeToken?.userId);
          }
          if (userId !== null && userId !== undefined) {
            dispatch({
              type: Type.SET_ID,
              payload: {
                id: userId,
              },
            });
            dispatch({
              type: Type.SET_USER,
              payload: {
                user: true,
              },
            });
            navigate("/");
          } else {
            Swal.fire({
              title: "Sorry the server is not ready try again",
              width: 389,
              text: "yeah ",
              icon: "info",
            });
          }
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            title: "Check your email and password again",
            width: 389,
            icon: "error",
          });
        })
        .finally(() => {
          setLoading(false);
        });
    }, 3000);
  };

  return (
    <>
      <Container fluid className="custom-bg">
        <Row className="justify-content-center  p-5">
          <Col className="col-md-3 mt-5 d-flex justify-content-center col-login">
            <img src={cooke} alt={"cooke ada"} className="img-cooke" />
          </Col>
          <Col className="col-md-5 d-flex  mt-5 col-login-1">
            <Form onSubmit={Auth}>
              <Card className="text-center border-0">
                <Card.Body>
                  <Card.Title className="title-login">Welcome</Card.Title>
                  <Card.Text className="title-text">
                    Log in into your exiting account
                  </Card.Text>
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
                  required={true}
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
                  required={true}
                  maxLength={12}
                />
              </Form.Group>
              <Form.Group className="mini-text" controlId="formBasicCheckbox">
                <Form.Check
                  className="input-checkbox"
                  type="checkbox"
                  label="I agree to terms & conditions"
                  required={true}
                />
              </Form.Group>
              <Button
                className=" botton-x"
                type="submit"
                disabled={loading ? true : false}
              >
                {loading ? (
                  <>
                    <div className="spinner-border text-light" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <p>Loading...</p>
                  </>
                ) : (
                  "Login"
                )}
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
    </>
  );
};

export default LoginDekstop;
