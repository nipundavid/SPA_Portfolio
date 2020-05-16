import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";
import Movie from "./Movie";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      {movies.map((movies) => (
        <Movie name={movies.name} price={movies.price} key={movies.id}></Movie>
      ))}
    </div>
  );
};

export default MovieList;
