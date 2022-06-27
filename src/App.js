import React, { useState } from "react";
import DisplayGrid from "./components/DisplayGrid";
import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";
import ReactContext from "./context/react.context";
import "./styles.css";

import singaporeData from "./data/singaporeData";
import newYorkData from "./data/newYorkData";
import southKoreaData from "./data/southKoreaData";

function App() {
  const [input, setInput] = useState("");
  const [post, setPost] = useState("initial data");

  // const searchPost = async (input) => {
  //   console.log(`search post activated for "${input}"`);
  //   const url = `http://api.weatherstack.com/current?access_key=abf7f3d36b5ca196a0d8346c7b19b02c&query=${input}`;
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   console.log("data: ", data);
  //   console.log("datatype: ", typeof data);
  //   setPost(data);
  // };

  const searchPost_noApi = (input) => {
    console.log(`search without api for ${input}`);
    switch (input) {
      case "SINGAPORE":
        console.log("switch to singapore");
        setPost(singaporeData);
        break;
      case "NEW YORK":
        console.log("switch to new york");
        setPost(newYorkData);
        break;

      case "SOUTH KOREA":
        console.log("switch to south korea");
        setPost(southKoreaData);
        break;
    }
  };

  return (
    <div id="app">
      <ReactContext.Provider value={{ input, setInput, post, setPost }}>
        Webpage title here in App
        <br />
        <br />
        <SearchBar searchPost={searchPost_noApi} />
        <NavBar />
        <DisplayGrid />
      </ReactContext.Provider>
    </div>
  );
}

export default App;
