import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

const Header = () => {
  const styles = {
    header: {
      backgroundColor: "white",
      borderBottom: '1px solid lightgray',
    },
    app__header: {
      backgroundColor: "transparent",
      color: "#8e94f2",
      fontFamily: "tahoma cursive",
    },
    app__login: {
      backgroundColor: "transparent",
      color: "#8e94f2",
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
              <Link className="btn btn-lg btn-light m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-light m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
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
