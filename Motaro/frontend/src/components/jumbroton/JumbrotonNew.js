import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import gambar1 from "../../style/images/popular.png";
import pot from "../../style/images/pot.png";
import fish from "../../style/images/fish.png";
import garpu from "../../style/images/garpu.png";
import BannerNew from "../BannerNew";
import Button from "react-bootstrap/esm/Button";
import { Carousel } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

const JumbrotonNew = () => {
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 428 });
    return isMobile ? children : null;
  };
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 429 });
    return isNotMobile ? children : null;
  };

  return (
    <>
      <Mobile>
        <Container fluid>
          <BannerNew />
          <Container>
            <Container>
              <Row>
                <Container>
                  <Row className="d-flex flex-row flex-nowrap d-block overflow-auto over-scroll-mobile">
                    <div className="row container-mini shadow-sm  m-2 bg-body rounded">
                      <div className="col-md-6">
                        <div className="bg-new-mobile border bg-warning">
                          <img alt="Web Studio" className="icon" src={pot} />
                        </div>
                      </div>
                      <div className="title-mini-mobile">
                        <div>
                          <small>Soup</small>
                        </div>
                      </div>
                    </div>
                    <div className="row container-mini shadow-sm  m-2 bg-body rounded">
                      <div className="col-md-6">
                        <div className="bg-new-mobile border">
                          <img alt="Web Studio" className="icon" src={garpu} />
                        </div>
                      </div>
                      <div className="title-mini-mobile">
                        <div>
                          <small>Soup</small>
                        </div>
                      </div>
                    </div>
                    <div className="row container-mini shadow-sm  m-2 bg-body rounded">
                      <div className="col-md-6">
                        <div className="bg-new-mobile border bg-danger">
                          <img alt="Web Studio" className="icon" src={fish} />
                        </div>
                      </div>
                      <div className="title-mini-mobile">
                        <div>
                          <small>Soup</small>
                        </div>
                      </div>
                    </div>
                  </Row>
                </Container>
              </Row>
            </Container>
          </Container>
        </Container>
      </Mobile>
      <Default>
        <Container fluid className="bg-new">
          <BannerNew />
          <Container>
            <Container>
              <Row>
                <Carousel className="ps-5">
                  <Carousel.Item interval={1000}>
                    <section className="section mt-5 mb-5">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-6">
                            <div>
                              <img
                                alt="Web Studio"
                                className="img-fluid"
                                src={gambar1}
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-5 ml-auto d-flex align-items-center mt-4 mt-md-0 ms-5">
                            <div>
                              <h2>Healthy Bone Broth Ramen (Quick & Easy)</h2>
                              <hr className="lineNew" />
                              <p className="margin-top-s">
                                Whether you’re a full stack web developer,
                                content author, or business professional –
                                Solodev gives you the power to build, customize,
                                and manage modules to boost your website.
                              </p>
                              <Button className="btn-new">Learn more</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </Carousel.Item>
                  <Carousel.Item interval={1000}>
                    <section className="section mt-5 mb-5">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-6">
                            <div>
                              <img
                                alt="Web Studio"
                                className="img-fluid"
                                src={gambar1}
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-5 ml-auto d-flex align-items-center mt-4 mt-md-0 ms-5">
                            <div>
                              <h2>Healthy Bone Broth Ramen (Quick & Easy)</h2>
                              <hr className="lineNew" />
                              <p className="margin-top-s">
                                Whether you’re a full stack web developer,
                                content author, or business professional –
                                Solodev gives you the power to build, customize,
                                and manage modules to boost your website.
                              </p>
                              <Button className="btn-new">Learn more</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </Carousel.Item>
                </Carousel>
              </Row>
            </Container>
          </Container>
        </Container>
      </Default>
    </>
  );
};

export default JumbrotonNew;
