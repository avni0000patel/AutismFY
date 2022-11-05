import React from "react";
import { ListGroup } from "react-bootstrap";

function Sidebar() {
  const contactList = ["1st List", "2nd List", "3rd List"];
  return (
    <>
      <h2>Available Contacts</h2>
      <ListGroup>
        {contactList.map((contact, idx) => (
          <ListGroup.Item key={idx}>{contact}</ListGroup.Item>
        ))}
      </ListGroup>
      <h2>Members</h2>
    </>
  );
}

export default Sidebar;
