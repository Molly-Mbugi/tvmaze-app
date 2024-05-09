import React, { useState } from 'react';

const AddPage = ({ updateHomePageContent }) => {
    // State hooks for form data
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        genre: '',
        runtime: '',
        summary: '' // Add summary field to the form data
    });

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Create a new episode object
        const newEpisode = {
            id: Math.random().toString(36).substr(2, 9), // Generate a random ID
            name: formData.name,
            image: formData.image,
            genre: formData.genre,
            runtime: formData.runtime,
            summary: formData.summary // Include summary in the new episode
        };
        // Update the home page content with the new episode
        updateHomePageContent(prevContent => [...prevContent, newEpisode]);
        // Reset the form data
        setFormData({
            name: '',
            image: '',
            genre: '',
            runtime: '',
            summary: '' // Reset summary field
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
        window.location.href = '/'; // Navigate to the home page
    };

    return (
        <div>
            <h2>Add Page</h2>
            {/* Form for adding new episodes */}
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
                        {/* Add more genre options as needed */}
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
                <button type="button" onClick={handleGoBack}>Back</button> {/* Button to go back to home page */}
            </form>
        </div>
    );
}

export default AddPage;

