import React from 'react';
import '../index.css'; // Import the CSS file for navbar styles
function EpisodeTable({ episodes }) {
  return (
    <div>
      <p className="table-description">mazetv, search your favourite tv shows that you like for full details🥰🥰🥰</p>
      <div className="episode-container">
        {episodes.map((episode) => (
          <div key={episode.id} className="episode-card">
            <img src={episode.image} alt={episode.name} className="episode-image" />
            <div className="episode-details">
              <h3>{episode.name}</h3>
              <p dangerouslySetInnerHTML={{ __html: episode.summary }}></p>
              <p><strong>Genres:</strong> {episode.genres ? episode.genres.join(', ') : 'N/A'}</p>
              <p><strong>Runtime:</strong> {episode.runtime} minutes</p>
              <a href={episode.url} target="_blank" rel="noopener noreferrer">Watch Episode</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EpisodeTable;

















