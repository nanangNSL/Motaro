import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import gambar1 from "../../style/images/popular.png";
import BannerGrid from "../BannerGrid";
import Pagination from "react-bootstrap/Pagination";

const JumbrotonGrid = () => {
  return (
    <Container fluid className="bg-new">
      <Container>
        <BannerGrid />
        <Row>
          <Col className="col-popular-footer">
            <Card style={{ width: "20rem" }} className="image-popular">
              <Card.Img variant="top" src={gambar1} />
              <Card.Title className="bottom-pop">Card Title</Card.Title>
            </Card>
            <Card style={{ width: "20rem" }} className="image-popular">
              <Card.Img variant="top" src={gambar1} />
              <Card.Title className="bottom-pop">Card Title</Card.Title>
            </Card>
            <Card style={{ width: "20rem" }} className="image-popular">
              <Card.Img variant="top" src={gambar1} />
              <Card.Title className="bottom-pop">Card Title</Card.Title>
            </Card>
            <Card style={{ width: "20rem" }} className="image-popular">
              <Card.Img variant="top" src={gambar1} />
              <Card.Title className="bottom-pop">Card Title</Card.Title>
            </Card>
            <Card style={{ width: "20rem" }} className="image-popular">
              <Card.Img variant="top" src={gambar1} />
              <Card.Title className="bottom-pop">Card Title</Card.Title>
            </Card>
            <Card style={{ width: "20rem" }} className="image-popular">
              <Card.Img variant="top" src={gambar1} />
              <Card.Title className="bottom-pop">Card Title</Card.Title>
            </Card>
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
