
import React from 'react';

const GenreFilter = ({ genres, onGenreClick }) => {
  return (
    <div>
      <h2>Filter by Genre</h2>
      <div className="genre-buttons">
        {genres.map((genre, index) => (
          <button key={index} onClick={() => onGenreClick(genre)}>{genre}</button>
        ))}
      </div>
    </div>
  );
}

export default GenreFilter;
