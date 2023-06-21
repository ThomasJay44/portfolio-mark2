import React from "react";
import styles from "./Blur.module.css";

export default function Blur() {
  const handleUpdate = (event) => {
    const { name, value, dataset } = event.target;
    const suffix = dataset.sizing || "";
    document.documentElement.style.setProperty(`--${name}`, value + suffix);
  };

  return (
    <div className={styles.blurContainer}>
      <h2>Update CSS Variables with <span className={styles.hl}>JS</span></h2>
      <div className={styles.controls}>
        <label htmlFor="spacing">Spacing:</label>
        <input
          id="spacing"
          type="range"
          name="spacing"
          min="10"
          max="200"
          defaultValue="10"
          data-sizing="px"
          onChange={handleUpdate}
        />
        <label htmlFor="blur">Blur:</label>
        <input
          id="blur"
          type="range"
          name="blur"
          min="0"
          max="25"
          defaultValue="10"
          data-sizing="px"
          onChange={handleUpdate}
        />
        <label htmlFor="base">Base Color</label>
        <input
          id="base"
          type="color"
          name="base"
          defaultValue="#ffc600"
          onChange={handleUpdate}
        />
      </div>
      <img
        src="https://source.unsplash.com/7bwQXzbF6KE/800x500"
        alt="Unsplash"
        className={styles.image}
      />
    </div>
  );
}
