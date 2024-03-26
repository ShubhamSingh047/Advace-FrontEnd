import React from "react";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItems from "./CityItems";
import Message from "./Message";

const CityList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="add you first city by city map !" />;
  return (
    <ul className={styles.cityList}>
      {cities.map((data) => (
        <CityItems cities={data} key={data.id} />
      ))}
    </ul>
  );
};

export default CityList;
