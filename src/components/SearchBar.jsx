import React from 'react';
import { useLocation } from 'react-router-dom'; // Import the useLocation hook
import '../index.css'; // Import the CSS file for styling

const SearchBar = ({ onChange, onSearch }) => {
    const location = useLocation(); // Get the current location
    const isAddPage = location.pathname === "/add"; // Check if the current path is "/add"

    // Render the search bar only if it's not the add episode page
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










