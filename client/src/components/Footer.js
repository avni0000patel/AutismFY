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
    },
    link: {
      color: "#8e94f2",
    },
  };
  return (
    <footer className="footer">
      <ul className="nav nav-tabs" style={styles.footer}>
        <Link className="" to="/">
          <li className="nav-item" style={styles.link}>
            Home
          </li>
        </Link>
        <Link className="" to="/todoList">
          <li className="nav-item" style={styles.link}>
            Todo
          </li>
        </Link>
        <Link className="" to="/notes">
          <li className="nav-item" style={styles.link}>
            Notes
          </li>
        </Link>

        <Link className="" to="/me">
          <li className="nav-item" style={styles.link}>
            Profile
          </li>
        </Link>
      </ul>
    </footer>
  );
}

export default NavTabs;
