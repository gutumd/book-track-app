import { useDispatch } from "react-redux";
import { useState } from "react";

import { setFilteredBooks } from "../redux/actions/searchActions";
import searchBar from "../styles/SearchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  return (
    <div className={searchBar.searchBar}>
      <input
        type="text"
        placeholder="Search by title..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          dispatch(setFilteredBooks(""));
        }}
      />
      <button onClick={() => dispatch(setFilteredBooks(query))}>Search</button>
    </div>
  );
};

export default SearchBar;
