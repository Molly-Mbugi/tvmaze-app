import React, { useState } from 'react';
import './index.css'; // Import the CSS 

const AddPage = ({ updateEpisodeList }) => {
    // State hooks for form data
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        genre: '',
        runtime: '',
        summary: '' 
    });

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://backend-14-szdr.onrender.com/episodes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    image: formData.image,
                    genre: formData.genre,
                    runtime: formData.runtime,
                    summary: formData.summary 
                })
            });
            if (!response.ok) {
                throw new Error('Failed to add episode');
            }
            // Retrieve the newly added episode from the response
            const newEpisode = await response.json();
            // Update the episode list with the new episode
            updateEpisodeList(prevList => [...prevList, newEpisode]);
            // Reset the form data
            setFormData({
                name: '',
                image: '',
                genre: '',
                runtime: '',
                summary: '' 
            });
        } catch (error) {
            console.error('Error adding episode:', error);
        }
    };

    // Function to handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    // Function to go back to the home page
    const handleGoBack = () => {
        // Navigate back to the home page without refreshing
        window.history.back();
    };

    return (
        <div className="form-container"> 
            <h2>Add Page</h2>
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Image URL:</label>
                    <input type="text" name="image" value={formData.image} onChange={handleChange} />
                </div>
                <div>
                    <label>Genre:</label>
                    <select name="genre" value={formData.genre} onChange={handleChange}>
                        <option value="">Select Genre</option>
                        <option value="Action">Action</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Comedy">Comedy</option>
                    </select>
                </div>
                <div>
                    <label>Runtime:</label>
                    <input type="text" name="runtime" value={formData.runtime} onChange={handleChange} />
                </div>
                <div>
                    <label>Summary:</label>
                    <textarea name="summary" value={formData.summary} onChange={handleChange} />
                </div>
                <button type="submit">Add Episode</button>
                <button type="button" onClick={handleGoBack}>Back</button> 
            </form>
        </div>
    );
}

export default AddPage;
