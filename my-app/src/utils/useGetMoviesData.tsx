import { useEffect, useState } from "react";
import useGetMovieList from "./useGetMovieList";
import { useDispatch } from "react-redux";
import { setMovies, setOriginalMovies } from "./configSlice";
import useGetSeriesData from "./useGetSeriesData";

const useGetMoviesData = (category: string) => {
  const [moviesList, setMoviesList] = useState<any[]>([]);
  const movieData = useGetMovieList();
  const seriesData = useGetSeriesData();
  const dispatch = useDispatch();

  useEffect(() => {
    if (category === "movies") {
      setMoviesList(movieData);
    } else {
      setMoviesList(seriesData);
    }
    const getData = async () => {
      const promises = moviesList.map((movie: any) =>
        fetch(
          `https://www.omdbapi.com/?i=${movie?.imdbID}&apikey=8388f299`
        ).then((res) => res.json())
      );
      const data = await Promise.all(promises);
      dispatch(setOriginalMovies(data));
      dispatch(setMovies(data));
    };

    if (moviesList.length > 0) {
      getData();
    }
  }, [moviesList, category]);
};

export default useGetMoviesData;
