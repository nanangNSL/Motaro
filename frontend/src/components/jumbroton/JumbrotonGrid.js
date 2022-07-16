import React, { useEffect} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import BannerGrid from "../BannerGrid";
import Pagination from "react-bootstrap/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { getRecipe, recipeSelector } from "../../features/recipeSlice";

const JumbrotonGrid = () => {
    const dispatch = useDispatch();
    const data  = useSelector(recipeSelector.selectAll)

    useEffect(() => {
      dispatch(getRecipe());
    }, [dispatch]);




  return (
    <Container fluid className="bg-new">
      <Container>
        <BannerGrid />
        <Row>
          <Col className="col-popular-footer">
            {data.map((data, index) => (
              <Card style={{ width: "20rem" }} className="image-popular" key={data[index]}>
              <Card.Img variant="top" src={data.image} />
              <Card.Title className="bottom-pop">{data.title}</Card.Title>
            </Card>
            ))}
          </Col>
        </Row>
        <Row>
          <Pagination  className="row-pagination">
            <Pagination.First className="col-pg" />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item className="col-pg" >{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </Row>
      </Container>
    </Container>
  );
};

export default JumbrotonGrid;
