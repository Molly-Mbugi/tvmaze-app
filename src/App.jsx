import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import SearchBar from './components/SearchBar.jsx';
import EpisodeTable from './components/EpisodeTable.jsx';
import AddPage from "./AddPage.jsx";
import AboutPage from "./components/AboutPage.jsx";

const App = () => {
    const [episodeList, setEpisodeList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

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

    const handleRefresh = async () => {
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

    const handleDeleteEpisode = async (episodeId) => {
        try {
            const response = await fetch(`http://localhost:3000/episodes/${episodeId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete episode');
            }
            // Remove the deleted episode from the list
            setEpisodeList(prevEpisodes =>
                prevEpisodes.filter(episode => episode.id !== episodeId)
            );
        } catch (error) {
            console.error('Error deleting episode:', error);
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
                <Routes>
                    <Route
                        path="/"
                        element={<>
                            <SearchBar onChange={handleSearchChange} onRefresh={handleRefresh} />
                            <EpisodeTable episodes={filteredEpisodes} onDelete={handleDeleteEpisode} />
                        </>}
                    />
                    <Route
                        path="/add"
                        element={<AddPage updateEpisodeList={setEpisodeList} />}
                    />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
