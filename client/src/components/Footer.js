import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  const styles = {
    footer: {
      backgroundColor: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      position: "fixed",
      left: "0",
      bottom: "0",
      width: "100%",
      height: "40px",
      borderTop: '2px solid #5d0cff',
    },
    link: {
      color: "#5d0cff",
    },
  };
  return (
    <footer className="footer">
      <ul className="nav nav-tabs" style={styles.footer}>
        <Link className="btn m-2" to="/">
          <li className="nav-item" style={styles.link}>
            Home
          </li>
        </Link>
        <Link className="btn m-2" to="/post">
          <li className="nav-item" style={styles.link}>
            Post
          </li>
        </Link>
        <Link className="btn m-2" to="/todoList">
          <li className="nav-item" style={styles.link}>
            To-Do
          </li>
        </Link>
        <Link className="btn m-2" to="/notes">
          <li className="nav-item" style={styles.link}>
            Notes
          </li>
        </Link>
        <Link className="btn m-2" to="/me">
          <li className="nav-item" style={styles.link}>
            Profile
          </li>
        </Link>
      </ul>
    </footer>
  );
}

export default NavTabs;
