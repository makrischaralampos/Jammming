import React from "react";
import styles from "./SearchResults.module.css";
import Tracklist from "./Tracklist";

function SearchResults() {
  return (
    <div className={styles.searchResults}>
      <h2>Results</h2>
      <Tracklist />
    </div>
  );
}

export default SearchResults;
