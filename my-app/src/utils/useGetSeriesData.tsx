import { useEffect, useState } from "react";
import { GET_LIST_API_SERIES } from "./constants";

const useGetSeriesData = () => {
  const [series, setSeries] = useState([]);

  const getMovies = async () => {
    const data = await fetch(GET_LIST_API_SERIES);
    const json = await data.json();
    setSeries(json?.Search);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return series;
};

export default useGetSeriesData;
