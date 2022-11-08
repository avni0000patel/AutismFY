import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./pages/Home/Home";
// import Search from './pages/Search';
import Create from "./pages/Create/Create";
import Messages from "./pages/Messages.js";
import ProfileContainer from "./pages/Profile/ProfileContainer";
import Auth from "../utils/auth";

export default function PortfolioContainer() {
    const styles = {
        all: {
            minHeight: "100vh",
            backgroundColor: "#8e94f2",
            color: "#ffffff",
            fontFamily: "Playfair Display",
        },
        homepage: {
            minHeight: "100vh",
            backgroundImage: "url(https://st4.depositphotos.com/17775888/31209/i/450/depositphotos_312093322-stock-photo-puzzle-pieces-wooden-background-top.jpg)",
            fontFamily: "Playfair Display",
            display: 'flex',
            overflow: 'hidden',
            justify: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
        },
        homepage__title: {
            color: "#8e94f2",
            display: 'flex',
            alignItems: 'center',
            fontWeight: 'bold',
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
    };


    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div style={styles.all}>
            <Navbar />
            {Auth.loggedIn() ? (
                <>
                    {renderPage()}
                    <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
                </>
            ) : (
                <div className="homepage" style={styles.homepage}>
                    <div className="card bg-light text-dark">

                        <div className="homepage__title card-title" style={styles.homepage__title}>
                            Welcome to AutismFY!
                            <br />
                            The place where you can create, connect, and share!
                            <br />
                            Please login or signup to continue!
                        </div>
                    </div>
                </div>
            )
            }

        </div >
    );
}
