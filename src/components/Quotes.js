import React, { useEffect, useState } from "react";

const Quotes = () => {
  const quotesArr = [
    "you'll still need to get up tomorrow and move on.",
    "you won't die again if you're already dead.",
    "life goes on.",
    "remember that some things are just beyond your control.",
    "the sun will still rise without you.",
  ];

  const [quote, setQuote] = useState("");
  const randomNum = Math.floor(Math.random() * quotesArr.length);

  console.log(randomNum);
  console.log(quotesArr[randomNum]);

  useEffect(() => {
    setQuote(quotesArr[randomNum]);
  }, []);

  return (
    <div className="flex justify-center text-base italic my-2">...{quote}</div>
  );
};

export default Quotes;
