import React, { useState } from 'react';
import Header from './components/Header.jsx';
import SearchBar from './components/SearchBar.jsx'; // Import the SearchBar component

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (value) => {
        setSearchTerm(value);
    };

    return (
        <div>
            <Header />
            <SearchBar onChange={handleSearchChange} /> {/* Add the SearchBar component */}
            
        </div>
    );
}

export default App;

