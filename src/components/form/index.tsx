import React from "react";
import { Form, Button } from "react-bootstrap";

interface IFromX {
  onChangeEmail?: any;
  onChangePassword?: any;
  onPressSubmit?: any;
}
function FormX(props: IFromX) {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => props.onChangeEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => props.onChangePassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={props.onPressSubmit}>
        Submit
      </Button>
    </Form>
  );
}

export default FormX;
