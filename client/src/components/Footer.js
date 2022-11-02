import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    const styles = {
        header: {
            backgroundColor: 'black',
            position: 'fixed',
            bottom: '0',
            width: '100%',
            zIndex: '1',
        },
        float: {
            position: 'absolute',
            right: '25px',
            marginTop: '5px',
        }
    }
    return (
        <header>
            <ul style={styles.header} className="nav nav-tabs">
                <li className="nav-item">
                    <a
                        href="#home"
                        onClick={() => handlePageChange('Home')}

                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#search"
                        onClick={() => handlePageChange('Portfolio')}

                        className={currentPage === 'Search' ? 'nav-link active' : 'nav-link'}
                    >
                        Search
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#create"
                        onClick={() => handlePageChange('Portfolio')}

                        className={currentPage === 'Create' ? 'nav-link active' : 'nav-link'}
                    >
                        Create
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#messages"
                        onClick={() => handlePageChange('Portfolio')}

                        className={currentPage === 'Messages' ? 'nav-link active' : 'nav-link'}
                    >
                        Create
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#profile"
                        onClick={() => handlePageChange('Portfolio')}

                        className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'}
                    >
                        Profile
                    </a>
                </li>
            </ul>
        </header>
    );
}

export default NavTabs;
