import React from 'react';
import '../index.css'; 
function EpisodeTable({ episodes }) {
  return (
    <table className="episode-table">
      <tbody>
        <tr className="episode-row">
          {episodes.map((episode, index) => (
            <td key={index}>
              <img src={episode.imageUrl} alt={episode.title} />
              <h3>{episode.title}</h3>
              <p><strong>Season:</strong> {episode.season}</p>
              <p><strong>Play Time (Minutes):</strong> {episode.playTimeMinutes}</p>
              <p><strong>Year:</strong> {episode.year}</p>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default EpisodeTable;






