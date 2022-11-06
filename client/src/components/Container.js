import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./pages/Home";
// import Search from './pages/Search';
import Create from "./pages/Create";
import Messages from "./pages/Messages.js";
// import Profile from './pages/Profile'
import ProfileContainer from "./pages/Profile/ProfileContainer";

export default function PortfolioContainer() {
  const styles = {
    all: {
      backgroundColor: "lightgray",
      color: "#ffffff",
      minHeight: "100vh",
      fontFamily: "Playfair Display",
    },
  };
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    // if (currentPage === 'Search') {
    //     return <Search />;
    // }
    if (currentPage === "Create") {
      return <Create />;
    }
    if (currentPage === "Messages") {
      return <Messages />;
    }
    if (currentPage === "Profile") {
      return <ProfileContainer />;
    }
    // return <Profile />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div style={styles.all}>
      <Navbar />
      {renderPage()}
      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}
