import MovieCard from "./MovieCard";

const MovieContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#f5f5f5] w-full pt-9 xl:gap-10 lg:gap-9 md:gap-7 sm:gap-8 xs:gap-8">
      <h1 className="xl:text-2xl font-bold lg:text-2xl md:text-xl xs:text-xl sm:text-xl">
        Recommended Movies
      </h1>
      <MovieCard />
    </div>
  );
};

export default MovieContainer;
