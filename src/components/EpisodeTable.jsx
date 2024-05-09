import React, { useState } from 'react';
import '../index.css'; // css for navbar 

function EpisodeTable({ episodes }) {
  // State to track the expanded episode
  const [expandedEpisode, setExpandedEpisode] = useState(null);

  // Function to handle click on "See More" link
  const handleSeeMore = (episodeId) => {
    if (expandedEpisode === episodeId) {
      // Collapse the episode if it's already expanded
      setExpandedEpisode(null);
    } else {
      // Expand the clicked episode
      setExpandedEpisode(episodeId);
    }
  };

  return (
    <div>
      <p className="table-description">mazetv, search your favourite tv shows that you like for full details🥰🥰🥰</p>
      <div className="episode-container">
        {episodes.map((episode) => (
          <div key={episode.id} className="episode-card">
            <img src={episode.image} alt={episode.name} className="episode-image" />
            <div className="episode-details">
              <h3>{episode.name}</h3>
              <p><strong>Genres:</strong> {episode.genres ? episode.genres.join(', ') : 'N/A'}</p>
              <p><strong>Runtime:</strong> {episode.runtime} minutes</p>
              {/* Conditional rendering of more details */}
              {expandedEpisode === episode.id && (
                <>
                  <p dangerouslySetInnerHTML={{ __html: episode.summary }}></p>
                  <a href={episode.url} target="_blank" rel="noopener noreferrer">Watch Episode</a>
                </>
              )}
              {/* "See More" link */}
              <button onClick={() => handleSeeMore(episode.id)}>
                {expandedEpisode === episode.id ? "See Less" : "See More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EpisodeTable;


















