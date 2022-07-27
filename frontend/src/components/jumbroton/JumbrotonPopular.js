import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Banner from "../Banner";
import { Row } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { Link } from "react-router-dom";

const JumbrotonPopular = () => {
  const [recipe, setRecipe] = useState("");

  const getRecipe = async () => {
    try {
      const response = await axios.get("http://localhost:5000/recipe/get");
      setRecipe(response.data.data);
    } catch (error) {
      Swal.fire("sorry", error, "error");
    }
  };
  useEffect(() => {
    getRecipe();
  }, []);

  return (
    <Container fluid className="bg-pop">
      <Banner />
      <Container>
        <Container className="ms-5 mt-3">
          <Row className="d-flex flex-row flex-nowrap d-block overflow-auto over-scroll">
            {[...recipe].map((data) => (
              <Card
                className="m-2 border-0 img-pop p-2 top justify-content-center  bg-transparent"
                key={data.recipe_id}
              >
                <Link to={`detail/${data.recipe_id}`}>
                  <Card.Img
                    variant="top"
                    src={data.image}
                    className="rounded img-pop shadow"
                  />
                  <Card.Title className="position-absolute bottom-left">
                    {data.title}
                  </Card.Title>
                </Link>
              </Card>
            ))}
          </Row>
        </Container>
      </Container>
    </Container>
  );
};

export default JumbrotonPopular;
