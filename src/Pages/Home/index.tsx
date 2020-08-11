import React from "react";
import Lottie from "react-lottie";
import intro from "../../assets/anim/intro.json";
import "./styles.css";
import { Container, Row, Col, Button } from "react-bootstrap";
function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: intro,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container style={{ overflow: "hidden" }}>
      <Row className="Center">
        <Col xs={12} lg={6}>
          <h1 className="Header">
            We Build More Than Apps, We Build Businesses
          </h1>
        </Col>
        <Col xs={12} lg={6}>
          <Lottie options={defaultOptions} />
        </Col>
      </Row>
      <h6 className="center pt-5">
        React Developers CA (RDC) is a creative development company that builds
        robust iOS & Android mobile apps, custom software applications and
        enterprise software.Vog is proudly Canadian and develops custom software
        applications that prioritize costs, analyze and mitigate risk, decrease
        failure rates, monitor progress, maximize returns, optimize processes,
        and increase operational efficiency. Our approach allows our clients to
        have easy access to our outstanding and collaborative process while we
        create digital strategies & solutions that add value to their
        businesses. At RDC, we work with an outstanding team of iOS, Android,
        and Web developers, as well as project managers and project coordinators
        who are eager to deliver efficient and reliable software.
      </h6>
      <h6 className="center"> Our Services:</h6>
      <ol className="center">
        <li> UX/UI Design Mobile App Development</li>
        <li> Web Development</li>
        <li> Enterprise Applications</li>
      </ol>
      <h6 className="center">
        With our creativity, enthusiasm and knowledge, we are the most reliable
        and best-suited team for your project. Contact us today and learn how
        software can revolutionize your business.
      </h6>
      <hr />
      <Row className="d-flex justify-content-center w-100  p-5">
        <Button variant="primary" className="center" href="/sign-in">
          Sign In
        </Button>
        <Button
          variant="secondary"
          className="center ml-5"
          href="mailto:tariqule@gmail.com"
        >
          Contact Us
        </Button>
      </Row>
    </Container>
  );
}

export default Home;
