import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import NavBar from "../components/NavbarHome";
import Footer from "../components/footer/Footer";
import axios from "axios";
import { BsImageFill } from "react-icons/bs";
import FormData from "form-data";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

const Addrecipe = () => {
  const { user } = useSelector((state) => state);
  let IdUser;
  if (user?.id?.id) {
    IdUser = user?.id?.id;
  } else {
    IdUser = user?.id?.id;
  }

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [Inggredients, setInggredients] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImage = (e) => {
    let uploaded = e.target.files[0];
    setImage(uploaded);
  };

  const UploadRecipe = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You can also add videos in your recipe details",
      icon: "warning",
      width: 389,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, uploaded it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        setTimeout(() => {
          const data = new FormData();
          data.append("user_id", IdUser);
          data.append("title", title);
          data.append("inggredients", Inggredients);
          data.append("image", image);

          axios
            .post("https://motaro.herokuapp.com/recipe/insert", data, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((res) => {
              Swal.fire("Upload!", "Your recipe has been uploaded.", "success");
            })
            .catch((err) => {
              Swal.fire("Cannot upload", "The image size cannot be larger than 1 mb and the only extension allowed is .jpg | .jpeg | .png", "error");
            })
            .finally(() => {
              setLoading(false);
            });
        }, 3000);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  };

  return (
    <>
      <NavBar />
      <Container className="contaner-add-recipe">
        <Col md={7}>
          <Form onSubmit={UploadRecipe}>
            <Form.Group className="border border-2 mb-3 p-4 rounded">
              <Form.Label htmlFor="file" className="borde">
                <div className="d-flex flex-column align-items-center">
                  <BsImageFill className="icon-recipe" />
                  <p>{image ? "Upload success" : "Add Photo"}</p>
                </div>
              </Form.Label>
              <Form.Control
                type="file"
                id="file"
                name="file"
                accept=".jpg,.jpeg,.png"
                onChange={handleImage}
                hidden={true}
              />
            </Form.Group>
            <Form.Group className="mb-3 " controlId="formBasicPassword">
              <Form.Control
                type="text"
                placeholder="Title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                maxLength="20"
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Inggredients"
                value={Inggredients}
                onChange={(event) => setInggredients(event.target.value)}
                required
              />
            </Form.Group>
            <Col className="col-bottom">
              <Button
                className="button-post border-0"
                type="submit"
                disabled={loading ? true : false}
              >
                {loading ? "Loading..." : "Post"}
              </Button>
            </Col>
          </Form>
        </Col>
      </Container>
      <Footer />
    </>
  );
};

export default Addrecipe;
