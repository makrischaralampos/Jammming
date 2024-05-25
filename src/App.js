import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";
import Spotify from "./Spotify";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  useEffect(() => {
    Spotify.getAccessToken();
  }, []);

  const search = (term) => {
    Spotify.search(term).then((tracks) => {
      setSearchResults(tracks);
    });
  };

  const addTrack = (track) => {
    if (playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    setPlaylistTracks([...playlistTracks, track]);
  };

  const removeTrack = (track) => {
    setPlaylistTracks(
      playlistTracks.filter((savedTrack) => savedTrack.id !== track.id)
    );
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const savePlaylist = () => {
    const trackURIs = playlistTracks.map((track) => track.uri);
    console.log(`Saving playlist: ${playlistName}`);
    console.log(`Track URIs: ${trackURIs}`);

    // Reset playlist
    setPlaylistName("New Playlist");
    setPlaylistTracks([]);
  };

  return (
    <div className={styles.app}>
      <h1>Jammming</h1>
      <SearchBar onSearch={search} />
      <div className={styles.appPlaylist}>
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
        <Playlist
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          onRemove={removeTrack}
          onNameChange={updatePlaylistName}
          onSave={savePlaylist}
        />
      </div>
    </div>
  );
}

export default App;
