import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/NavbarHome";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import popular from "../../style/images/avatar.png";
import gambar1 from "../../style/images/popular.png";
import Nav from "react-bootstrap/Nav";
import FormData from "form-data";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Profile = () => {
  const { user } = useSelector((state) => state);
  let IdUser;
  if (user?.id?.id) {
    IdUser = user?.id?.id;
  } else {
    IdUser = user?.id?.id;
  }

  useEffect(() => {
    fetcherUser();
  });

  const [name, setname] = useState("");
  const [profile, setprofilePictures] = useState("");
  const fetcherUser = async (req, res) => {
    const userMe = await axios.get(`https://motaro.herokuapp.com/admin/id/${IdUser}`);
    setname(userMe?.data?.data[0]?.name);
    setprofilePictures(userMe?.data?.data[0]?.image);
    return userMe?.data;
  };

  const [show, setShow] = useState(false);
  const [unActive, setActive] = useState(false);
  const [ready, setReady] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleActive = () => setActive(true);
  const handleNonActive = () => setActive(false);

  const [loading, setLoading] = useState(false);

  const [imagePreview, setPreview] = useState("");
  const [image, setImage] = useState("");

  const handleImage = (e) => {
    e.preventDefault();
    let uploaded = e.target.files[0];
    setImage(uploaded);
    setPreview(URL.createObjectURL(uploaded));
    if (uploaded) {
      setReady(true);
    }
  };
  const UpdateImage = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append("image", image);
    setTimeout(() => {
      axios
        .patch(`https://motaro.herokuapp.com/profile/${IdUser}`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          Swal.fire({
            title: "Image successfully uploaded",
            width: 389,
            text: "yeah ",
            icon: "success",
          });
          setShow(false);
        })
        .catch((error) => {
          Swal.fire({
            title:
              "An error occurred in uploading the image, please check the image again",
            width: 389,
            text: "yeah ",
            icon: "error",
          });
        })
        .finally(() => {
          setLoading(false);
          setReady(false);
        });
    }, 3000);
  };

  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [loadingPWD, setLoadingPWD] = useState(false);

  const updatePWD = (e) => {
    e.preventDefault();
    setLoadingPWD(true);
    if (password !== confPassword) {
      Swal.fire({
        title: "New password and Confirm password",
        width: 389,
        text: "Recheck your password",
        icon: "info",
      });
    } else {
      setTimeout(() => {
        axios
          .patch(`https://motaro.herokuapp.com/profile/pwd/${IdUser}`, {
            password: password,
            confPassword: confPassword,
          })
          .catch((error) => {
            Swal.fire({
              title: "An error occurred during the password update process",
              width: 389,
              icon: "error",
            });
          })
          .finally(() => {
            Swal.fire({
              title: "Password update is successful",
              width: 389,
              icon: "success",
            });
            setLoadingPWD(false);
          });
      }, 3000);
    }
  };
  const [showPwd, setShowPwd] = useState("password");
  const handleSee = (e) => {
    e.preventDefault();
    setShowPwd("text");
  };

  const handleHide = (e) => {
    e.preventDefault();
    setShowPwd("password");
  };

  return (
    <>
      <Container className="bg-white" fluid>
        <Container>
          <NavBar />
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title className="text-center">Edit Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="modal-form">
                <Card>
                  <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                      <Nav.Item>
                        <Nav.Link onClick={handleNonActive}>
                          Change Profile
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link onClick={handleActive}>
                          Change Password
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Card.Header>
                  <Card.Body
                    id="first"
                    className={unActive ? "d-none" : "d-block"}
                  >
                    <div className="text-center">
                      <img
                        src={imagePreview ? imagePreview : popular}
                        className="img-placeholder col"
                      />
                    </div>
                    <Form onSubmit={UpdateImage}>
                      <Form.Group className="mb-3 row row-cols-1 d-flex flex-column justify-content-center align-content-center">
                        <Form.Label
                          htmlFor="file"
                          className="col border btn-edit mt-2"
                          hidden={ready ? true : false}
                        >
                          Upload
                        </Form.Label>
                        <Form.Control
                          type="file"
                          id="file"
                          name="file"
                          hidden="true"
                          accept=".jpg,.jpeg, .png, .webp"
                          onChange={handleImage}
                        />
                        <button
                          type="submit"
                          className="col btn  btn-secondary btn-edit mt-2"
                          hidden={ready ? false : true}
                        >
                          {loading ? "loading" : "start"}
                        </button>
                      </Form.Group>
                    </Form>
                  </Card.Body>
                  <Card.Body className={unActive ? "d-block" : "d-none"}>
                    <Card.Title>
                      Change Password{" "}
                      {showPwd === "password" ? (
                        <span onClick={handleSee}>
                          <FaEye />
                        </span>
                      ) : (
                        <span onClick={handleHide}>
                          <FaEyeSlash />
                        </span>
                      )}
                    </Card.Title>
                    <Form onSubmit={updatePWD}>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Control
                          type={showPwd}
                          placeholder="Enter New Password"
                          maxLength={12}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Control
                          type={showPwd}
                          placeholder="Enter Confirm Password"
                          maxLength={12}
                          value={confPassword}
                          onChange={(e) => setConfPassword(e.target.value)}
                        />
                      </Form.Group>

                      <Button variant="warning" type="submit">
                        {loadingPWD ? (
                          <div
                            class="spinner-border text-warning"
                            role="status"
                          >
                            <span class="visually-hidden">Loading...</span>
                          </div>
                        ) : (
                          "Submit"
                        )}
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="warning" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          <Card className="border-0 ms-2 bg-transparent">
            <Card.Header className="container-detail border-0">
              <Card className="card-profile border-0 bg-transparent">
                <div className=" row row-cols-1 w-100 d-flex justify-content-center">
                  <Card.Img
                    src={profile ? profile : popular}
                    className="image-profile mt-2 col"
                  />
                  <div className="col text-center">
                    <Card.Text>{name ? name : "Guest"}</Card.Text>
                  </div>
                  <div className="col text-center mt-3">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={handleShow}
                    >
                      Change
                    </button>
                  </div>
                </div>
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

export default Profile;
