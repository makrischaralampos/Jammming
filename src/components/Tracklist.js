import React from "react";
import styles from "./Tracklist.module.css";
import Track from "./Track";

function Tracklist({ tracks, onAdd, onRemove, isRemoval }) {
  return (
    <div className={styles.tracklist}>
      {tracks.map((track) => (
        <Track
          key={track.id}
          track={track}
          onAdd={onAdd}
          onRemove={onRemove}
          isRemoval={isRemoval}
        />
      ))}
    </div>
  );
}

// Add default props for safety
Tracklist.defaultProps = {
  tracks: [],
};

export default Tracklist;
