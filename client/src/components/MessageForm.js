import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./MessageForm.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function MessageForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <div className="messages-output"></div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={11}>
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
          <Col md={1}>
            <Button
              variant="outline-light"
              type="submit"
              className="bg-white shadow-1-strong text-dark"
              style={{
                width: "100%",
                backgroundColor: "rainbow",
              }}
            >
              <i className="bi bi-send"></i>
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default MessageForm;
