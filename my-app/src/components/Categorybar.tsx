import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../utils/categorySlice";
import { useState } from "react";

const Categorybar = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("movies");
  const handleCategory = (category: string) => {
    dispatch(setSelectedCategory(category));
  };

  return (
    <div className="w-full flex items-center justify-around xl:gap-72 bg-[#f5f5f5] xl:py-[10px] lg:py-2 lg:gap-52 md:py-2 md:gap-20">
      <div>
        <ul className="flex items-center xl:gap-5 lg:gap-5 md:gap-4 cursor-pointer md:text-[13px] xl:text-sm lg:text-[13px] xs:text-[10px] xs:gap-2">
          <li
            className={`${selected === "movies" ? "font-medium" : ""}`}
            onClick={() => {
              handleCategory("movies");
              setSelected("movies");
            }}
          >
            Movies
          </li>
          <li
            className={`${selected === "series" ? "font-medium" : ""}`}
            onClick={() => {
              handleCategory("series");
              setSelected("series");
            }}
          >
            Series
          </li>
          <li>Events</li>
          <li>Plays</li>
          <li>Sports</li>
          <li>Activities</li>
        </ul>
      </div>
      <div>
        <ul className="flex items-center xl:gap-7 lg:gap-7 md:gap-4 text-[13px] font-normal cursor-pointer md:text-[10px] xl:text-xs xs:text-[8px] xs:gap-2">
          <li>ListYourShow</li>
          <li>Corporates</li>
          <li>Offers</li>
          <li>Gift Cards</li>
        </ul>
      </div>
    </div>
  );
};

export default Categorybar;
