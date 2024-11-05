import { useEffect, useState } from "react";
import { GET_LIST_API } from "./constants";

const useGetMovieList = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const data = await fetch(GET_LIST_API);
    const json = await data.json();
    setMovies(json?.Search);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return movies;
};

export default useGetMovieList;
