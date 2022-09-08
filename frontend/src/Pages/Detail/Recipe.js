import React, { useState, useEffect } from "react";
import Footer from "../../components/footer/Footer";
import NavbarHome from "../../components/NavbarHome";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import { BiLike, BiArrowBack, BiVideoPlus } from "react-icons/bi";
import { BsFillPlayBtnFill, BsBookmark } from "react-icons/bs";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import FormData from "form-data";
import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Avatar from "../../style/images/avatar.png";

import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";

const Recipe = () => {
  const { user } = useSelector((state) => state);
  let IdUser;
  if (user?.id?.id) {
    IdUser = user?.id?.id;
  } else {
    IdUser = user?.id?.id;
  }

  const { id } = useParams();
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [inggredients, setInggredients] = useState("");
  const [videos, setUpload] = useState("");
  const navigate = useNavigate();

  axios
    .get(`https://motaro.herokuapp.com/admin/recipe/${id}`)
    .then((response) => {
      const data = response.data.data;
      setImage(data[0].image);
      setTitle(data[0].title);
      setInggredients(data[0].inggredients);
    })
    .catch((err) => {
      console.log(err);
    });

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 400 });
    return isMobile ? children : null;
  };
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 401 });
    return isNotMobile ? children : null;
  };
  const goBack = () => {
    navigate("/");
  };
  const handleVideo = (e) => {
    e.preventDefault();
    let uploaded = e.target.files[0];
    setUpload(uploaded);
  };
  const UploadVideo = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("user_id", IdUser);
    data.append("title_video", title);
    data.append("video", videos);
    data.append("recipe_id", id);
    setTimeout(() => {
      axios
        .post("https://motaro.herokuapp.com/video/insert", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 3000);
  };
  useEffect(() => {
    fetcher();
  }, []);
  const [total, setTotalvideo] = useState(null);
  const [listVideo, setListVideo] = useState([]);

  const fetcher = async (req, res) => {
    const fetchVideo = await axios.get(
      `https://motaro.herokuapp.com/admin/video/${id}`
    );
    setListVideo(fetchVideo.data.data);
    setTotalvideo(fetchVideo.data.data.length);
    return fetchVideo.response;
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [valueComment, setValueComment] = useState("");
  const pushComment = (e) => {
    e.preventDefault();
    setTimeout(() => {
      if (IdUser === false || IdUser === null) {
        Swal.fire({
          title: "You have to login first",
          width: 389,
          icon: "info",
        });
      } else {
        axios
          .post(`https://motaro.herokuapp.com/comment/insert`, {
            user_id: IdUser,
            recipe_id: id,
            comment: valueComment,
          })
          .catch((err) => {
            Swal.fire({
              title: "There was an error when the comment input process",
              width: 389,
              text: "Try again",
              icon: "error",
            });
          })
          .finally(() => {
            Swal.fire({
              title: "Successfully input comment",
              width: 389,
              icon: "success",
            });
          });
      }
    }, 3000);
  };
  useEffect(() => {
    fetchComment();
  }, []);
  const [listComment, setComment] = useState([]);
  const fetchComment = async (req, res) => {
    const response = await axios.get(
      `https://motaro.herokuapp.com/admin/comment/${id}`
    );
    setComment(response.data.data);
    return response;
  };

  return (
    <>
      <Mobile>
        <NavbarHome />
        <Card className="card-mobile">
          <Card.Header className="container-detail border-0">
            <Card className="image-recipe-mobile">
              <Card.Img src={image} />
              <BiArrowBack className="icon-back" onClick={goBack} />
              <div className="container-title-mobile">
                <div className="section-mobile">
                  <h3>{title}</h3>
                  <small>by Nanang</small>
                </div>
                <Card.Title className="social-mobile">
                  <BsBookmark className="icon" />
                  <BiLike className="icon" />
                </Card.Title>
              </div>
            </Card>
          </Card.Header>
          <Card.Body className="card-body-mobile">
            <Card.Title>Inggredients</Card.Title>
            <Card.Text>{inggredients}</Card.Text>
            <Card.Title>Video Step</Card.Title>
            <div className="button-video-mobile shadow bg-body">
              <Button className="button-modal">
                <BsFillPlayBtnFill />
              </Button>
              <div className=" d-flex flex-column">
                <Card.Title className="recipe-title">Step 1</Card.Title>
                <small className="recipe-mobile">siapkan alat dan bahan</small>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Footer />
      </Mobile>
      <Default>
        <Container className="bg-new" fluid>
          <Container>
            <NavbarHome />
            <Card className="border-0 ms-2 bg-transparent">
              <Card.Title className="text-center mt-5">{title}</Card.Title>
              <Card.Header className="container-detail border-0">
                <Card className="image-recipe">
                  <Card.Img src={image} />
                  <Card.Title className="bottom-left">
                    <BsBookmark />
                    <BiLike />
                  </Card.Title>
                </Card>
              </Card.Header>
              <Card.Body>
                <Card.Title>Inggredients</Card.Title>
                <Card.Text>{inggredients.replace(/-/g, "\r\n")}</Card.Text>
                <Card.Title>Video </Card.Title>
                <Form className=" w-100">
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="file" className="video-label">
                      <BiVideoPlus
                        className="icon-camera ms-3"
                        onClick={UploadVideo}
                      />
                      <p className="ms-2 mt-3">Upload Video</p>
                    </Form.Label>
                    <Form.Control
                      type="file"
                      id="file"
                      name="file"
                      placeholder="Input video file"
                      accept=".mp4,.3gpp,.x-msvideo"
                      hidden
                      required={true}
                      onChange={handleVideo}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" hidden>
                    Submit
                  </Button>
                </Form>
                
                <div className={total <= 0? "d-none" : "button-video"}>
                  <Button className="button-modal" onClick={handleShow}>
                    <BsFillPlayBtnFill />
                  </Button>
                </div>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>{title ? title : "nothing"}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div>
                      {listVideo.map((item) => (
                        <>
                          <div key={item.id_video}>
                            <video
                              name="media"
                              width="400"
                              autoPlay={true}
                              height="300"
                            >
                              <source src={item.video} type="video/mp4" />
                            </video>
                          </div>
                        </>
                      ))}
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                      Back to Recipe
                    </Button>
                  </Modal.Footer>
                </Modal>
                <div className="container mt-2">
                  <Form className=" w-100" onChange={pushComment}>
                    <Form.Control
                      id="message"
                      name="message"
                      type="text"
                      placeholder="Comment :"
                      autoFocus
                      value={valueComment}
                      onChange={(e) => setValueComment(e.target.value)}
                      className="comment"
                    />
                    <Button variant="primary" type="submit" className="bg-post">
                      Submit
                    </Button>
                  </Form>
                </div>
                <div>
                  <h5>Comment :</h5>
                  <div className="container">
                    {listComment.map((data) => (
                      <div key={data.id} className="row row-cols-2 mb-2">
                        <div className="col-sm-1 ">
                          <img
                            src={data.image ? data.image : Avatar}
                            width="40px"
                            height="40px"
                            alt="image"
                            className="image-comment"
                          />
                        </div>
                        <div className="col-sm-10">
                          <div className="row row-cols-1">
                            <div className="col text-name">{data.name}</div>
                            <div className="col text-cpmment">
                              {data.comment}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Container>
        </Container>
        <Footer />
      </Default>
    </>
  );
};

export default Recipe;
