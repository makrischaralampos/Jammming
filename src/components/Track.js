import React from "react";
import styles from "./Track.module.css";

function Track() {
  return (
    <div className={styles.track}>
      <div className={styles.trackInformation}>
        <h3>Track Name</h3>
        <p>Artist | Album</p>
      </div>
      <button className={styles.trackAction}>+</button>
    </div>
  );
}

export default Track;
