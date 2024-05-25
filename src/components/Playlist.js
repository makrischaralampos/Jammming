import React from "react";
import styles from "./Playlist.module.css";
import Tracklist from "./Tracklist";

function Playlist({ playlistName, playlistTracks, onRemove, onNameChange }) {
  const handleNameChange = (event) => {
    onNameChange(event.target.value);
  };

  return (
    <div className={styles.playlist}>
      <input value={playlistName} onChange={handleNameChange} />
      <Tracklist tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
      <button className={styles.playlistSave}>SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
