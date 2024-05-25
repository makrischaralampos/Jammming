import React from "react";
import styles from "./Track.module.css";

function Track({ track, onAdd, onRemove, isRemoval }) {
  const addTrack = () => {
    onAdd(track);
  };

  const removeTrack = () => {
    onRemove(track);
  };

  return (
    <div className={styles.track}>
      <div className={styles.trackInformation}>
        <h3>{track.name}</h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      {isRemoval ? (
        <button className={styles.trackAction} onClick={removeTrack}>
          -
        </button>
      ) : (
        <button className={styles.trackAction} onClick={addTrack}>
          +
        </button>
      )}
    </div>
  );
}

export default Track;
