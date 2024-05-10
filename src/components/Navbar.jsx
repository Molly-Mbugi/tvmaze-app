import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Import css navbar 

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>TV MAZE APP</h1>
            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/add" className="nav-link">Add Episode</Link>
                <Link to="/about" className="nav-link">About</Link> 
            </div>
        </nav>
    );
}
