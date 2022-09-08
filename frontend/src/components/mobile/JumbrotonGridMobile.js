import React, { useEffect, useState, useRef } from "react";
import { AiFillStar } from "react-icons/ai";
import gambar from "../../style/images/search.png";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios"

const JumbrotonGridMobile = () => {


 
  const [recipe, setRecipe] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(8);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");

  const scollToRef = useRef(null);
  useEffect(() => {
    getRecipe();
  }, [page, keyword]);
  const getRecipe = async () => {
    const response = await axios.get(
      `https://motaro.herokuapp.com/search?search_query=${keyword}&page=${page}&limit=${limit}`
    );
    setRecipe(response.data.result);
    setPage(response.data.page);
    setPages(response.data.totalPage);
    setRows(response.data.totalRows);
  };

  const searchData = (e) => {
    e.preventDefault();
    setPage(0);
    setKeyword(query);
  };


  return (
    <>
      <Container
        fluid
        className="sticky-top shadow position-fixed top-0 start-50 translate-middle search-mobile"
      >
        <Form onSubmit={searchData} className="form-mobile">
          <Form.Control
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Pasta, Bread, etc..."
            className="search"
          />
          <Button
            className="btn-search-top"
            onClick={() => scollToRef.current.scrollIntoView()}
          >
            <Card.Img variant="top" src={gambar} className="icon" />
          </Button>
        </Form>
      </Container>
      <section
        ref={scollToRef}
        className="section mt-5 mb-5 d-flex flex-column"
      >
        {recipe.map((data) => (
          <div
            key={data.recipe_id}
            className="d-flex flex-end  container-mobile shadow p-3 mb-2 bg-body rounded"
          >
            <div className="col-5">
              <img alt="Web Studio" className="img-mobile" src={data.image} />
            </div>
            <div className="ms-3">
              <div className="title-mobile">
                <small>{data.title}</small>
              </div>
              <div className="footer-title">
                <small>food, healty</small>
              </div>
              <div className="rating-mobile">
                <AiFillStar />
                <small>4.7</small>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default JumbrotonGridMobile;
