import star from "../assets/starrate.svg";
import { useSelector } from "react-redux";
import useGetMoviesData from "../utils/useGetMoviesData";
import { ThreeDots } from "react-loader-spinner";

const formatNumber = (number: any) => {
  const numericValue = parseInt(number, 10);

  if (isNaN(numericValue)) return number;

  if (numericValue >= 1000) {
    return `${Math.round(numericValue / 1000)}k`;
  }
  return numericValue.toString();
};

const MovieCard = () => {
  const category = useSelector((store: any) => store.category.selectedCategory);
  useGetMoviesData(category);
  const movies = useSelector((store: any) => store.config.movies);

  if (movies.length == 0) {
    return (
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#9E9EA2"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    );
  }
  return (
    <div className="grid xl:grid-cols-4 xl:gap-14 mb-10 lg:gap-8 lg:grid-cols-4 md:grid-cols-3 md:gap-7 sm:grid-cols-3 sm:gap-5 xsm:grid-cols-2 xsm:gap-4 xs:grid-cols-1 xs:gap-2">
      {movies.map((movie: any) => {
        return (
          <div
            className="xl:w-[235px] xl:h-[442px] rounded-md flex flex-col gap-3 cursor-pointer md:w-[220px] lg:w-[220px] lg:h-[380px] md:h-[370px] xsm:w-[160px] xs:h-[350px] xs:w-[190px]"
            key={movie.imdbID}
          >
            <div className="relative">
              <img
                src={movie.Poster}
                alt="moviecard"
                className="w-[235px] xl:h-[380px] rounded-md lg:h-[320px] md:h-[300px] xs:h-[250px]"
              />
              <div className="flex items-center gap-3 px-2 font-light py-2 text-lg text-center bg-black text-white absolute bottom-0 w-full rounded-br-md rounded-bl-md md:py-2 xs:py-2">
                <div className="flex gap-1 items-center">
                  <img src={star} alt="ratings" className="xs:h-5" />
                  <span className="xl:text-base md:text-sm xs:text-xs">
                    {movie.Ratings[0].Value}
                  </span>
                </div>
                <div className="xl:text-base md:text-sm xs:text-xs">
                  {formatNumber(movie.imdbVotes)}K Votes
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-medium xl:text-xl lg:text-xl truncate">
                {movie.Title}
              </h1>
              <h2 className="font-normal md:text-sm text-gray-600 truncate xl:text-base lg:text-base">
                {movie.Genre}
              </h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieCard;
