import { useState, useEffect } from "react";
import Categorybar from "./Categorybar";
import MovieContainer from "./MovieContainer";
import Carousels from "./Carousel";

const Body = () => {
  const [showCategorybar, setShowCategorybar] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setShowCategorybar(!(width < 768));
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {showCategorybar && <Categorybar />}
      <Carousels />
      <MovieContainer />
    </div>
  );
};

export default Body;
