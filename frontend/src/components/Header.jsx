import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="bg-blue-500 h-80 flex items-end pb-4 justify-center ">
      <div className="">
        <div className="text-7xl py-4 font-bold flex justify-center text-white">
          <h1>AcoNews</h1>
        </div>
        <div className="relative px-5">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Header;
