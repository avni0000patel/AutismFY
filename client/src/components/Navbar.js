import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";

import Auth from "../utils/auth";

const AppNavbar = () => {

  const styles = {
    header: {
      backgroundColor: "white",
      color: "#8e94f2",
    },
    app__header: {
      backgroundColor: "transparent",
      color: "#8e94f2",
      fontFamily: "tahoma cursive",
      position: "absolute",
    },
    app__login: {
      backgroundColor: "transparent",
      color: "#8e94f2",
      fontFamily: "tahoma cursive",
    },
    logo: {
      height: "100px",
      width: "150px",
    },
  };
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar className="header" style={styles.header} expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <div style={styles.app__header} className="app__header">
              <h1>AutismFY</h1>
            </div>
            <Nav className="ms-auto">
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link style={styles.app__login} onClick={Auth.logout}>
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link
                  style={styles.app__login}
                  onClick={() => setShowModal(true)}
                >
                  Login/SignUp
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="signup">SignUp</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );

};

export default AppNavbar;
