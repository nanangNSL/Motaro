import React,{useState} from "react";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
// import popular from "../../style/images/detail.png";
import { HiSaveAs } from "react-icons/hi";
import { BiLike } from "react-icons/bi";
import { BsFillPlayBtnFill } from "react-icons/bs";
import { useParams} from "react-router-dom";
import axios from "axios";


const Recipe = () => {
  const { id } = useParams();
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [inggredients, setInggredients] = useState('');
  const [video, setVideo] = useState('');

  axios.get(`http://localhost:5000/admin/recipe/${id}`)
  .then((response) =>{
    const data = response.data.data;
    setImage(data[0].image)
    setTitle(data[0].title)
    setInggredients(data[0].inggredients)
    setVideo(data[0].video)
    
  })
  .catch((err) =>{
    console.log(err)
  })

  return (
    <>
      <Container className="bg-new" fluid>
        <Container>
          <NavBar />
          <Card className="border-0 ms-2 bg-transparent">
          <Card.Title className="text-center">{title}</Card.Title>
            <Card.Header className="container-detail border-0">
              <Card className="image-recipe">
                <Card.Img src={image} />
                <Card.Title className="bottom-left">
                  <HiSaveAs />
                  <BiLike />
                </Card.Title>
              </Card>
            </Card.Header>
            <Card.Body>
              <Card.Title>Inggredients</Card.Title>
              <Card.Text>{inggredients}
              </Card.Text>
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
    </>
  );
};

export default Recipe;
