import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import NavbarHome from "../../components/NavbarHome";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import { BiLike , BiArrowBack } from "react-icons/bi";
import { BsFillPlayBtnFill, BsBookmark } from "react-icons/bs";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useMediaQuery } from "react-responsive";

const Recipe = () => {
  const { id } = useParams();
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [inggredients, setInggredients] = useState("");
  const [video, setVideo] = useState("");
  const navigate = useNavigate();

  axios
    .get(`http://localhost:5000/admin/recipe/${id}`)
    .then((response) => {
      const data = response.data.data;
      setImage(data[0].image);
      setTitle(data[0].title);
      setInggredients(data[0].inggredients);
      setVideo(data[0].video);
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
  const goBack = () =>{
    navigate('/')
  }

  return (
    <>
      <Mobile>
        <NavbarHome />
        <Card className="card-mobile">
          <Card.Header className="container-detail border-0">
            <Card className="image-recipe-mobile">
              <Card.Img src={image} />
              <BiArrowBack className="icon-back" onClick={goBack}/>
              <div className="container-title-mobile">
                <div className="section-mobile">
                  <h3 >{title}</h3>
                <small>by Nanang</small>
                </div>
                <Card.Title className="social-mobile">
                <BsBookmark  className="icon"/>
                <BiLike className="icon"/>
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
              <Card.Title className="text-center">{title}</Card.Title>
              <Card.Header className="container-detail border-0">
                <Card className="image-recipe">
                  <Card.Img src={image} />
                  <Card.Title className="bottom-left">
                    <BsBookmark/>
                    <BiLike />
                  </Card.Title>
                </Card>
              </Card.Header>
              <Card.Body>
                <Card.Title>Inggredients</Card.Title>
                <Card.Text>{inggredients}</Card.Text>
                <Card.Title>Video Step</Card.Title>
                <div className="button-video">
                  <Button className="button-modal">
                    <BsFillPlayBtnFill />
                    {video}
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
      </Default>
    </>
  );
};

export default Recipe;
