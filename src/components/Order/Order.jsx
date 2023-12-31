import React, { useState, useEffect } from "react";
import order from "../../css/Order.css";
import OrderList from "../OrderList/OrderList";

function AsteroidList({
  dataList,
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
  console.log(arrAsteroid);
  return (
    <section>
      <ul className="order-list">
        {arrAsteroid?.map((item) => (
          <OrderList
            key={item.id}
            data={item}
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
