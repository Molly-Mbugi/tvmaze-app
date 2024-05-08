// Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Import the CSS file for navbar styles

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>TV MAZE APP</h1>
            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/add" className="nav-link">Add Episode</Link>
                {/* Add more links as needed */}
            </div>
        </nav>
    );
}

export default Navbar;
