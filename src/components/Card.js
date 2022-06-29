import React, { useContext } from "react";
import ReactContext from "../context/react.context";

const Card = (props) => {
  const reactCtx = useContext(ReactContext);

  return (
    <div className="inline-block align-middle rounded-lg w-44 h-60 drop-shadow-2xl block align-middle bg-yellow opacity-75 p-5 m-2 hover:opacity-100">
      <div className="text-xs my-1">weather icon</div>
      <div className="font-bold text-xl my-1">{props.location}</div>
      <div className="flex justify-center align-bottom my-1">
        <span className="text-5xl in-line-flex ">{props.temp}</span>
        <span className="text-md inline-block align-bottom">°C</span>
      </div>
      <span className="flex justify-center text-base font-style: italic">
        {props.des}
      </span>
      <br />
    </div>
  );
};

export default Card;
