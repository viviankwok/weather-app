import React, { useEffect, useState } from "react";

const Quotes = () => {
  const quotesArr = [
    "you'll still need to get up tomorrow and move on",
    "you won't die again if you're already dead",
    "life goes on",
    "remember that some things are just beyond your control",
    "the sun will still rise without you",
    "one more hour of struggle today means one less hour of struggle tomorrow",
    "counting from 0 is the new norm",
    "breakfast is important for developing cognitive agility",
    "milo is a scarce commodity in GA",
    "you still don't understand Redux",
    "your struggles now may be insignificant 5 years down the road",
    "comparisons should be done against your past self, not others",
  ];

  console.log(`quotesArr.length ${quotesArr.length}`);

  const [quote, setQuote] = useState("");
  const randomNum = Math.floor(Math.random() * quotesArr.length);

  console.log(randomNum);
  console.log(quotesArr[randomNum]);

  useEffect(() => {
    setQuote(quotesArr[randomNum]);
  }, []);

  return (
    <div className="flex justify-center text-base italic my-2">...{quote}.</div>
  );
};

export default Quotes;
