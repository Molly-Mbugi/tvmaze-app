// SearchBar.jsx

import React from 'react';
import '../index.css'; // Import the CSS file for styling

const SearchBar = ({ onChange, onSearch, onRefresh }) => {
    const handleInputChange = (e) => {
        onChange(e.target.value);
    };

    const handleSearchClick = () => {
        if (onSearch) {
            onSearch();
        }
    };

    const handleRefreshClick = () => {
        if (onRefresh) {
            onRefresh();
        }
    };

    return (
        <div className="search-bar-container">
            <input
                type="text"
                placeholder="Search Episodes..."
                className="search-input"
                onChange={handleInputChange}
            />
            <button className="search-button" onClick={handleSearchClick}>Search</button>
            <button className="refresh-button" onClick={handleRefreshClick}>Refresh</button>
        </div>
    );
}

export default SearchBar;


