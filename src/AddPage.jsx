import React, { useState } from 'react';

const AddPage = ({ homePageContent, updateHomePageContent }) => {
    // State hooks for form data
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        genre: '',
        runtime: '',
    });

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to add the submitted data to the home page
        // For example:
        const newEpisode = {
            id: Math.random().toString(36).substr(2, 9), // Generate a random ID
            name: formData.name,
            image: formData.image,
            genre: formData.genre,
            runtime: formData.runtime,
        };
        // Combine the new episode with existing episodes
        const updatedHomePageContent = [...homePageContent, newEpisode];
        // Call a function to update the home page content
        updateHomePageContent(updatedHomePageContent);
        // Reset the form data
        setFormData({
            name: '',
            image: '',
            genre: '',
            runtime: '',
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

    return (
        <div>
            <h2>Add Page</h2>
            {/* Form for adding new components */}
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
                <button type="submit">Add Episode</button>
            </form>
        </div>
    );
}

export default AddPage;
