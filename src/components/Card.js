import React, { useContext } from "react";
import ReactContext from "../context/react.context";

const Card = (props) => {
  const reactCtx = useContext(ReactContext);

  return (
    <div className="card">
      Card component here
      <h1>{props.location}</h1>
      current temp: {props.temp}
      <br />
      description: {props.des}
    </div>
  );
};

export default Card;
