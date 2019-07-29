import React from 'react';

function Movie(props) {
  const movieStyleFirst = {
    border: '1px solid grey',
    padding: '20px'
  }

  const movieStyleDefault = {
    border: '1px solid grey',
    borderTop: 'hidden',
    padding: '20px'
  }

  return (
    <div className="movie" style={props.first ? movieStyleFirst : movieStyleDefault}>
      {props.movie.title}
    </div>
  );
}

export default Movie;