import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../Sidebar";
import MessageForm from "../../MessageForm";

function Messages() {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Sidebar />
        </Col>
        <Col md={8}>
          <MessageForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Messages;
