import React, { useState } from "react";
import styles from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  const search = () => {
    onSearch(term);
  };

  return (
    <div className={styles.searchBar}>
      <input
        placeholder="Enter A Song, Album, or Artist"
        value={term}
        onChange={handleTermChange}
      />
      <button className={styles.searchButton} onClick={search}>
        SEARCH
      </button>
    </div>
  );
}

export default SearchBar;
