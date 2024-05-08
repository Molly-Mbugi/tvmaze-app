import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../index.css'; 

const Header = () => {
    return (
        <div className="header">
            <h1>TV MAZE APP</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li> {/* Link to the Home page */}
                    <li><Link to="/add">Add</Link></li> {/* Link to the Add page */}
                </ul>
            </nav>
        </div>
    );
}

export default Header;
