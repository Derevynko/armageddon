import React, { useState, useEffect } from "react";
import Asteroids from "../Asteroids/Asteroids";
import asteroidList from "../../css/AsteroidList.css";

function AsteroidList({
  dataList,
  orderList,
  openPopup,
  isDistanceKilometers,
  onAddClick,
  onRemoveClick,
}) {
  const [arrAsteroid, setArrAsteroid] = useState(dataList);

  useEffect(() => {
    setArrAsteroid(dataList);
  }, [dataList]);

  function onAddClickHandler(asteroid) {
    onAddClick(asteroid);
  }

  function onRemoveClickHandler(asteroid) {
    onRemoveClick(asteroid);
  }

  function handleOpenPopup(data) {
    openPopup(data);
  }
  return (
    <section className="asteroids">
      <ul className="list">
        {arrAsteroid.map((item) => (
          <Asteroids
            key={item.id}
            data={item}
            orderList={orderList}
            isDistanceKilometers={isDistanceKilometers}
            onAddClick={onAddClickHandler}
            onRemoveClick={onRemoveClickHandler}
            onOpenPopup={handleOpenPopup}
          />
        ))}
      </ul>
    </section>
  );
}

export default AsteroidList;
