import React from "react";
import Card from "./Card";

const DisplayGrid = (props) => {
  const display = props.cards.map((d, i) => {
    return (
      <Card
        icon={d.current.weather_icons}
        location={d.location.name}
        country={d.location.country}
        temp={d.current.temperature}
        des={d.current.weather_descriptions[0]}
        removeCard={props.removeCard}
        i={i}
      />
    );
  });

  return (
    <div className="grid gap-2 grid-cols-5 grid-rows-2 m-5">{display}</div>
  );
};

export default DisplayGrid;
