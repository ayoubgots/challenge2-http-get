import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  return (
    <li className={classes.movie}>
      <h2>{props.movie.title}</h2>
      <h3>{props.movie.releaseDate}</h3>
      <p>{props.movie.openingText}</p>  
    </li>
  );
};

export default Movie;
