import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import SearchBar from './components/SearchBar.jsx';
import EpisodeTable from './components/EpisodeTable.jsx'; 
import AddPage from "./AddPage.jsx";

const App = () => {
    // Initialize homePageContent as an empty array
    const [homePageContent, setHomePageContent] = useState([]);
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
            setHomePageContent(data); // Set homePageContent with fetched data
        } catch (error) {
            console.error('Error fetching episode data:', error);
        }
    };

    const filteredEpisodes = homePageContent.filter(episode => {
        return episode.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const handleSearchChange = (value) => {
        setSearchTerm(value);
    };

    // Add function to update homePageContent
    const updateHomePageContent = (newContent) => {
        setHomePageContent(newContent);
    };

    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={
                        <div>
                            <SearchBar onChange={handleSearchChange} />
                            <EpisodeTable episodes={filteredEpisodes} />
                        </div>
                    } />
                    {/* Pass updateHomePageContent function to AddPage */}
                    <Route path="/add" element={<AddPage homePageContent={homePageContent} updateHomePageContent={updateHomePageContent} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;






;

















