import { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";
import downarrow from "../assets/downarrow.svg";
import hamburger from "../assets/hamburger.svg";
import MobileNavbar from "./MobileNavbar";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../utils/configSlice";

const Navbar = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [searchText, setSearchText] = useState("");
  const originalMovies = useSelector(
    (store: any) => store.config.originalMovies
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const handler = setTimeout(() => {
      const newMovies = originalMovies.filter((movie: any) =>
        movie?.Title.toLowerCase().includes(searchText.toLowerCase())
      );
      if (searchText) {
        dispatch(setMovies(newMovies));
      } else {
        dispatch(setMovies(originalMovies));
      }
    }, 1000);

    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobileView(width > 200 && width < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(handler);
    };
  }, [searchText]);

  if (isMobileView) {
    return <MobileNavbar />;
  }

  return (
    <div className="w-full flex items-center justify-around gap-20 py-4 bg-white lg:px-5 md:px-5">
      <div className="flex items-center justify-between gap-5">
        <img src={logo} alt="logo" className="xl:h-8 cursor-pointer md:h-7" />
        <div className="flex items-center relative">
          <img
            src={search}
            alt="search-logo"
            className="absolute xl:left-3 xl:top-3 xl:h-[14px] lg:left-3 lg:top-3 lg:h-[14px] cursor-pointer md:left-3 md:top-[6px] md:h-3"
          />
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search for Movies, Events, Plays, Sports and Activities"
            className="border border-gray-200 text-gray-400 xl:text-sm xl:px-9 xl:py-2 xl:w-[550px] rounded-md inputfield lg:w-[450px] lg:px-9 lg:py-2 lg:text-sm md:w-[270px] md:px-8 md:text-xs md:py-1"
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-3 cursor-pointer">
          <span className="font-normal md:text-xs xl:text-sm lg:text-sm">
            Mathura
          </span>
          <img src={downarrow} alt="dropdown" className="h-5" />
        </div>
        <div className="flex items-center gap-5">
          <button className="bg-[#f84464] xl:px-4 xl:py-[5px] rounded-[4px] xl:text-xs text-white text-sm lg:px-3 lg:py-1 md:px-3 md:py-[3px] md:text-xs">
            Sign in
          </button>
          <img src={hamburger} alt="hamburger" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
