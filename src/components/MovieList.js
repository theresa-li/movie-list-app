import React from 'react';
import movies from '../sampleMovieData.js';
import MovieListItem from './MovieListItem.js';

function MovieList() {
  return (
    <div id="movieList">
      {movies.map((movie, i) => <MovieListItem movie={movie} first={i === 0}/>)}
    </div>
  );
}

export default MovieList;
