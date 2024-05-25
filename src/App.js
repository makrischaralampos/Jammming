import React from "react";
import styles from "./App.module.css";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";

function App() {
  return (
    <div className={styles.app}>
      <h1>Jammming</h1>
      <SearchBar />
      <div className={styles.appPlaylist}>
        <SearchResults />
        <Playlist />
      </div>
    </div>
  );
}

export default App;
