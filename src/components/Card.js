import { react } from "@babel/types";
import React, { useContext } from "react";
import ReactContext from "../context/react.context";

const Card = (props) => {
  const reactCtx = useContext(ReactContext);

  return (
    <div className="card">
      Card {props.number} here
      <br />
      {JSON.stringify(reactCtx.post)}
    </div>
  );
};

export default Card;
