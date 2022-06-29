import React, { useContext } from "react";
import ReactContext from "../context/react.context";

const Card = (props) => {
  const reactCtx = useContext(ReactContext);

  const redBin = (e) => {
    e.preventDefault();
    e.target.src =
      "https://cdn-icons.flaticon.com/png/512/3687/premium/3687412.png?token=exp=1656473046~hmac=166e8dd71ac8497ece77ee3de8d9a806";
  };

  const blackBin = (e) => {
    e.preventDefault();
    e.target.src =
      "https://cdn-icons.flaticon.com/png/512/3178/premium/3178180.png?token=exp=1656473042~hmac=621fe4839b1d6e68f0aff13e81d56d1b";
  };

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
      <div className="flex justify-center align-bottom">
        <img
          src="https://cdn-icons.flaticon.com/png/512/3178/premium/3178180.png?token=exp=1656473042~hmac=621fe4839b1d6e68f0aff13e81d56d1b"
          onMouseOver={redBin}
          onMouseOut={blackBin}
          onClick={() => props.removeCard(props.i)}
          className="w-6 h-6"
        ></img>
      </div>
    </div>
  );
};

export default Card;
