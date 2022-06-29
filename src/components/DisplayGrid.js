import React, { useContext } from "react";
import ReactContext from "../context/react.context";
import Card from "./Card";
import singaporeData from "../data/singaporeData";

const DisplayGrid = (props) => {
  const reactCtx = useContext(ReactContext);
  // console.log("reactCtx post map: ", reactCtx.post);
  console.log("displayArr ", props.displayArr);

  const display = props.displayArr.map((d, i) => {
    return (
      <Card
        location={d.location.name}
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
