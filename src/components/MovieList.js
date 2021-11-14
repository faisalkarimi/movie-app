import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import Header from "./Header";

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovie = async (url) => {
    const { data } = await axios.get(url);
    setMovies(data.results);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let searchTerm = e.target.search.value;

    if (searchTerm && searchTerm !== "") {
      fetchMovie(SEARCH_API + searchTerm);
      e.target.search.value = "";
    } else {
      window.location.reload();
    }
  };

  useEffect(() => {
    fetchMovie(API_URL);
  }, []);

  return (
    <>
      <Header onSubmit={handleSubmit} />
      <main>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            imgPath={IMG_PATH + movie.poster_path}
            title={movie.title}
            vote_average={movie.vote_average}
            overview={movie.overview}
          />
        ))}
      </main>
    </>
  );
};

export default MovieList;
