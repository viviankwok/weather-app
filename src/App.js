import React, { useState } from "react";
import DisplayGrid from "./components/DisplayGrid";
import SearchBar from "./components/SearchBar";
import ReactContext from "./context/react.context";
import "./style.css";

import singaporeData from "./data/singaporeData";
import newYorkData from "./data/newYorkData";
import southKoreaData from "./data/southKoreaData";
import Quotes from "./components/Quotes";

const initCardArr = [];

function App() {
  const [input, setInput] = useState("");
  const [cards, setCards] = useState(initCardArr);

  const searchPost = async (input) => {
    console.log(`searchPost with api activated for "${input}"`);

    const url = `http://api.weatherstack.com/current?access_key=abf7f3d36b5ca196a0d8346c7b19b02c&query=${input}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log("data: ", data);

    if (data.success === false) {
      alert("Pls enter a valid location for me to pass my project 2 :)");
    } else {
      if (cards.length < 10) {
        setCards((prevState) => {
          return [...prevState, data];
        });
      } else {
        alert(
          "Maximum 10 cards. Pls delete one for me to pass my project 2 :)"
        );
      }
    }
  };

  // const searchPost_noApi = (input) => {
  //   console.log(`searchPost without api for ${input}`);
  //   const input_upperCase = input.toUpperCase();

  //   if (input_upperCase === "SINGAPORE") {
  //     setCards((prevState) => {
  //       return [...prevState, singaporeData];
  //     });
  //   } else if (input_upperCase === "SOUTH KOREA") {
  //     setCards((prevState) => {
  //       return [...prevState, southKoreaData];
  //     });
  //   } else if (input_upperCase === "NEW YORK") {
  //     setCards((prevState) => {
  //       return [...prevState, newYorkData];
  //     });
  //   } else {
  //     alert("Pls enter a valid location for me to pass my project 2 :)");
  //   }
  // };

  const removeCard = (index) => {
    console.log("remove card activated for card", index);
    const workingCardArr = cards.filter((d, i) => i !== index);
    setCards(workingCardArr);
  };

  return (
    <div id="app">
      <ReactContext.Provider value={{ input, setInput }}>
        <h1 className="text-4xl flex justify-center font-semibold">
          Weather you like it or not
        </h1>
        <Quotes />
        <br />
        <SearchBar searchPost={searchPost} />
        {/* <NavBar /> */}
        <DisplayGrid cards={cards} removeCard={removeCard} />
      </ReactContext.Provider>
    </div>
  );
}

export default App;
