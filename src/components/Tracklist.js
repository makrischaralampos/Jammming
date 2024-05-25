import React from "react";
import styles from "./Tracklist.module.css";
import Track from "./Track";

function Tracklist({ tracks }) {
  return (
    <div className={styles.tracklist}>
      {tracks && tracks.map((track) => <Track key={track.id} track={track} />)}
    </div>
  );
}

Tracklist.defaultProps = {
  tracks: [],
};

export default Tracklist;
