import { FiSearch } from "react-icons/fi";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div role="search" className="w-full max-w-xl bg-elements shadow-md rounded-md px-6 py-4 flex items-center gap-6">
      <FiSearch className="text-text" size={22} aria-hidden="true" />

      <label htmlFor="search" className="sr-only">
        Search for a country
      </label>

      <input
        id="search"
        type="search"
        value={search}
        aria-label="Search for a country"
        placeholder="Search for a country..."
        className="w-full bg-elements outline-none text-text placeholder:text-gray-500"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
