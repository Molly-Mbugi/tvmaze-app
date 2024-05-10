

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import SearchBar from './components/SearchBar.jsx';
import EpisodeTable from './components/EpisodeTable.jsx';
import AddPage from "./AddPage.jsx";
import AboutPage from "./components/AboutPage.jsx";

const App = () => {
    const [episodeList, setEpisodeList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const currentRoute = window.location.pathname; // Get the current route using window.location.pathname

    useEffect(() => {
        fetchEpisodeData();
    }, []);

    const fetchEpisodeData = async () => {
        try {
            const response = await fetch('http://localhost:3000/episodes');
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
        <Router>
            <div>
                <Header />
                {currentRoute !== "/about" && <SearchBar onChange={handleSearchChange} />}
                <Routes>
                    <Route path="/" element={<EpisodeTable episodes={filteredEpisodes} />} />
                    <Route
                        path="/add"
                        element={<AddPage homePageContent={episodeList} />}
                    />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;







;

















