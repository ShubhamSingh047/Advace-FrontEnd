import React from "react";
import styles from "./CityItem.module.css";

const formalDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const CityItems = ({ cities }) => {
  const { cityName, emoji, date } = cities;
  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>{formalDate(date)}</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
};

export default CityItems;
