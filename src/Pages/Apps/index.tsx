import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.css";
import CardX from "../../components/card";
import { useHistory } from "react-router-dom";

function Apps() {
  const router = useHistory();
  function openInNewTab(url: any) {
    var win = window.open(url, "_blank");
    // win.focus();
  }
  const data = [
    {
      title: "MyBee Web",
      buttonText: "Open",
      buttonClick: () => openInNewTab("https://mybee.reactdevelopers.ca/"),
    },
  ];

  return (
    <Container style={{ overflow: "hidden" }}>
      <h2 className="Header">Welcome to Pre-Production Environment</h2>
      <hr></hr>
      <Row className="d-flex justify-content-center">
        {data.map((e, i) => (
          <Col>
            <CardX
              title={e.title}
              key={i}
              className="m-3"
              buttonText={e.buttonText}
              onClickButton={e.buttonClick}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Apps;
