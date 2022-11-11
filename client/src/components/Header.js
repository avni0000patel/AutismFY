import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

const Header = () => {
  const styles = {
    header: {
      backgroundColor: "white",
      borderBottom: '2px solid #5d0cff',
    },
    app__header: {
      backgroundColor: "transparent",
      color: "#5d0cff",
      fontFamily: "tahoma cursive",
    },
    app__button: {
      backgroundColor: "#5d0cff",
      color: 'white',
    },
    app__login: {
      backgroundColor: "transparent",
      color: "#5d0cff",
      fontFamily: "tahoma cursive",
    }
  };
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="header mb-4 py-3 flex-row align-center" style={styles.header}>
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="app__header" style={styles.app__header} to="/">
            <h1 className="m-0">AutismFY</h1>
          </Link>
          <p className="app__header m-0" style={styles.app__header}>The place where you can create, connect, and share!</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="app__button btn btn-lg m-2" style={styles.app__button} to="/me">
                {Auth.getProfile().data.username}'s Profile
              </Link>
              <button className="app__button btn btn-lg m-2" style={styles.app__button} onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="app__button btn btn-lg m-2" style={styles.app__button} to="/login">
                Login
              </Link>
              <Link className="app__button btn btn-lg m-2" style={styles.app__button} to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
