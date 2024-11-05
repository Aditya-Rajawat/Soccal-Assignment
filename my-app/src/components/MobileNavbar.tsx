const MobileNavbar = () => {
  return (
    <div className="xs:fixed xs:bottom-0 xs:bg-white xs:z-30 xs:w-full xs:py-2 xs:px-6">
      <ul className="flex justify-around gap-7">
        <li className="flex flex-col items-center">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/home-default-collection-202302270255.png"
            alt="home"
            className="h-6 w-6"
          />
          <span className="xs:text-[11px] xs:text-zinc-800 hover:text-red-600">
            Home
          </span>
        </li>
        <li className="flex flex-col justify-center items-center">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/movies-default-collection-202303031120.png"
            alt="movies"
            className="h-6 w-6"
          />
          <span className="xs:text-[11px] xs:text-zinc-800 hover:text-red-600">
            Movies
          </span>
        </li>
        <li className="flex flex-col justify-center items-center">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/le-icon-grey-collection-202405100122.png"
            alt="liveevents"
            className="h-6 w-6"
          />
          <span className="xs:text-[11px] xs:text-zinc-800 hover:text-red-600">
            Live Events
          </span>
        </li>
        <li className="flex flex-col justify-center items-center">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/profile-default-collection-202302270255.png"
            alt="profile"
            className="h-6 w-6"
          />
          <span className="xs:text-[11px] xs:text-zinc-800 hover:text-red-600">
            Profile
          </span>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavbar;
