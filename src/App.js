import React, { useState } from "react";
import DisplayGrid from "./components/DisplayGrid";
import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";
import ReactContext from "./context/react.context";
import "./style.css";

import singaporeData from "./data/singaporeData";
import newYorkData from "./data/newYorkData";
import southKoreaData from "./data/southKoreaData";
import Quotes from "./components/Quotes";

const displayArr = [];

function App() {
  const [input, setInput] = useState("");
  const [post, setPost] = useState([]);

  // const searchPost = async (input) => {
  //   console.log(`search post activated for "${input}"`);
  //   const url = `http://api.weatherstack.com/current?access_key=abf7f3d36b5ca196a0d8346c7b19b02c&query=${input}`;
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   console.log("data: ", data);
  //   console.log("datatype: ", typeof data);
  //   displayArr.push(data);
  // };

  const searchPost_noApi = (input) => {
    console.log(`search without api for ${input}`);
    const input_upperCase = input.toUpperCase();
    console.log("displayArr before adding ", displayArr);

    if (input_upperCase === "SINGAPORE") {
      displayArr.push(singaporeData);
    } else if (input_upperCase === "SOUTH KOREA") {
      displayArr.push(southKoreaData);
    } else if (input_upperCase === "NEW YORK") {
      displayArr.push(newYorkData);
    } else {
      alert("Pls enter a valid location for me to pass my project 2 :)");
    }
    console.log("displayArr after adding ", displayArr);
  };

  return (
    <div id="app">
      <ReactContext.Provider value={{ input, setInput, post, setPost }}>
        <h1 className="text-4xl flex justify-center font-semibold">
          Weather you like it or not
        </h1>
        <Quotes />
        <br />
        <SearchBar searchPost={searchPost_noApi} />
        {/* <NavBar /> */}
        <DisplayGrid displayArr={displayArr} />
      </ReactContext.Provider>
    </div>
  );
}

export default App;
