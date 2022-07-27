import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Nav from "react-bootstrap/Nav";
import { useMediaQuery } from "react-responsive";
import { AiFillStar } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import Navbar from "react-bootstrap/Navbar";

const JumbrotonGrid = () => {
  const [recipe, setRecipe] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(8);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getRecipe();
  }, [page, keyword]);

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 428 });
    return isMobile ? children : null;
  };
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 429 });
    return isNotMobile ? children : null;
  };

  const getRecipe = async () => {
    const response = await axios.get(
      `http://localhost:5000/search?search_query=${keyword}&page=${page}&limit=${limit}`
    );
    setRecipe(response.data.result);
    setPage(response.data.page);
    setPages(response.data.totalPage);
    setRows(response.data.totalRows);
  };

  const changePage = ({ selected }) => {
    setPage(selected);
    if (selected === 9) {
      setMsg(
        "Jika tidak menemukan data yang Anda cari, silahkan cari data dengan kata kunci spesifik!"
      );
    } else {
      setMsg("");
    }
  };

  const searchData = (e) => {
    e.preventDefault();
    setPage(0);
    setMsg("");
    setKeyword(query);
  };

  return (
    <>
      <Mobile>
        <Container
          fluid
          className="sticky-top shadow position-fixed top-0 start-50 translate-middle search-mobile"
        >
          <Form
            onSubmit={searchData}
            className="form-mobile"
          > 
            <Form.Control
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
             
              placeholder="🔍 Search Pasta, Bread, etc..."
              className="search"
            />
            <Button className="col-search" type="submit">
                  Search
                </Button>
          </Form>
        </Container>

        <section className="section mt-5 mb-5 d-flex flex-column">
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
      </Mobile>
      <Default>
        <Container fluid className="bg-new">
          <Container>
            <Card body className="banner-pop-footer">
              <h1 style={{ fontSize: "30px" }}>Popular For You !</h1>
              <Form
                onSubmit={searchData}
                className="d-flex justify-content-end position-absolute top-0 end-0 mt-3"
              >
                <Form.Control
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Find something here..."
                  className="me-2 width-search"
                />
                <Button className="col-search" type="submit">
                  Search
                </Button>
              </Form>
            </Card>
            <Row className="d-flex p-2 justify-content-center overflow-hidden">
              {recipe.map((data) => (
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
            <p className="total">
              Total Rows: {rows} Page: {rows ? page + 1 : 0} of {pages}
            </p>
            <p className="text-center">{msg}</p>
            <Nav
              aria-label="Page navigation example"
              className="pagination justify-content-center"
            >
              <ReactPaginate
                previousLabel={"< Prev"}
                nextLabel={"Next >"}
                pageCount={Math.min(10, pages)}
                onPageChange={changePage}
                containerClassName={"pagination "}
                pageLinkClassName={"page-item page-link col-page"}
                previousLinkClassName={"page-item page-link   col-page"}
                nextLinkClassName={"page-item page-link col-page"}
                activeLinkClassName={"page-item active col-pagi"}
                disabledLinkClassName={"page-item disabled"}
              />
            </Nav>
          </Container>
        </Container>
      </Default>
    </>
  );
};

export default JumbrotonGrid;
