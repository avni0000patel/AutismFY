import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./MessageForm.css";

function MessageForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <div className="messages-output"></div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={10}>
            <Form.Group
              className="mb-3"
              controlId="messageForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                placeholder="Your Message"
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col md={2}>
            <Button
              variant="info"
              type="submit"
              style={{ width: "100%", backgroundColor: "blue" }}
            >
              Send
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default MessageForm;
