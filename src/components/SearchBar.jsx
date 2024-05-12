import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // hook
import '../index.css'; // Import the CSS 

const SearchBar = ({ onChange, onSearch, onRefresh }) => {
    const location = useLocation(); // the current location
    const isAddPage = location.pathname === "/add"; 

    // Function input change
    const handleInputChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div className="search-bar-container">
            <h1 className="header1">Find Movies, TV shows and more</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search Episodes..."
                    className="search-input"
                    onChange={handleInputChange}
                />
            </div>
        </div>
    );
}

export default SearchBar;










