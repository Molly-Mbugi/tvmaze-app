import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import SearchBar from './components/SearchBar.jsx';
import EpisodeTable from './components/EpisodeTable.jsx'; // Import the EpisodeTable component

const App = () => {
    const [episodeList, setEpisodeList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchEpisodeData();
    }, []); // Fetch episode data when component mounts

    const fetchEpisodeData = async () => {
        try {
            const response = await fetch('http://localhost:3000/episodes'); // Adjust the URL as per your JSON server
            if (!response.ok) {
                throw new Error('Failed to fetch episode data');
            }
            const data = await response.json();
            setEpisodeList(data);
        } catch (error) {
            console.error('Error fetching episode data:', error);
        }
    };

    const filteredEpisodes = episodeList.filter(episode => {
        return episode.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const handleSearchChange = (value) => {
        setSearchTerm(value);
    };

    return (
        <div>
            <Header />
            <SearchBar onChange={handleSearchChange} />
            <EpisodeTable episodes={filteredEpisodes} />
        </div>
    );
}

export default App;















