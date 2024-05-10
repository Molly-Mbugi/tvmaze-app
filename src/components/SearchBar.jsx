import React from 'react';
import { useLocation } from 'react-router-dom'; //  hook
import '../index.css'; // Import the CSS 

const SearchBar = ({ onChange, onSearch }) => {
    const location = useLocation(); // the current location
    const isAddPage = location.pathname === "/add"; // Check if the current path is "/add"
fetch( )
    // Render the search bar for episode name
    if (isAddPage) {
        return (
            <div className="search-bar-container">
                <h1 className="header1">Find Movies, TV shows and more</h1>
            </div>
        );
    }

    const handleInputChange = (e) => {
        onChange(e.target.value);
    };

    const handleSearchClick = () => {
        if (onSearch) {
            onSearch();
        }
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
                <button className="search-button" onClick={handleSearchClick}>Search</button>
            </div>
        </div>
    );
}

export default SearchBar;










