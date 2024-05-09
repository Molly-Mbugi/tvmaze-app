import React, { useState } from 'react';
import './index.css'; // Import the CSS 

const AddPage = ({ updateHomePageContent }) => {
    // State hooks for form data
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        genre: '',
        runtime: '',
        summary: '' 
    });

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Create a new episode 
        const newEpisode = {
            id: Math.random().toString(36).substr(2, 9), // Generate an ID
            name: formData.name,
            image: formData.image,
            genre: formData.genre,
            runtime: formData.runtime,
            summary: formData.summary 
        };
        // Update the home page content with the new episode
        updateHomePageContent(prevContent => [...prevContent, newEpisode]);
        // Reset the form data
        setFormData({
            name: '',
            image: '',
            genre: '',
            runtime: '',
            summary: '' 
        });
    };

    // Function to handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    // Function to handle navigation back to the home page
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





