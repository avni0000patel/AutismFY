import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    const styles = {
        footer: {
            backgroundColor: 'black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: "fixed",
            left: "0",
            bottom: "0",
            width: "100%",
            height: '40px',
        },
        link: {
            color: 'white',
        },
    }
    return (
        <footer style={styles.footer}>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a style={styles.link}
                        href="#home"
                        onClick={() => handlePageChange('Home')}

                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a style={styles.link}
                        href="#search"
                        onClick={() => handlePageChange('Portfolio')}

                        className={currentPage === 'Search' ? 'nav-link active' : 'nav-link'}
                    >
                        Search
                    </a>
                </li>
                <li className="nav-item">
                    <a style={styles.link}
                        href="#create"
                        onClick={() => handlePageChange('Create')}

                        className={currentPage === 'Create' ? 'nav-link active' : 'nav-link'}
                    >
                        Create
                    </a>
                </li>
                <li className="nav-item">
                    <a style={styles.link}
                        href="#messages"
                        onClick={() => handlePageChange('Messages')}

                        className={currentPage === 'Messages' ? 'nav-link active' : 'nav-link'}
                    >
                        Messages
                    </a>
                </li>
                <li className="nav-item">
                    <a style={styles.link}
                        href="#profile"
                        onClick={() => handlePageChange('Profile')}

                        className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'}
                    >
                        Profile
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default NavTabs;
