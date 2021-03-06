import React from "react";
import { Card, Button } from "react-bootstrap";
import "./styles.css";

const mybeeeimg = require("../../assets/img/mybee.png");

function CardX(props: any) {
  return (
    <Card className={"CenterCatd card"}>
      <Card.Img variant="top" src={mybeeeimg} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="primary" onClick={props.onClickButton}>
          {props.buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardX;
