import React, { useState } from "react";
import DisplayGrid from "./components/DisplayGrid";
import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";
import ReactContext from "./context/react.context";
import "./styles.css";

function App() {
  const [input, setInput] = useState("testing123");
  const [post, setPost] = useState("Initial state");

  const searchPost = async (input) => {
    console.log(`search post activated for "${input}"`);
    const url = `http://api.weatherstack.com/current?access_key=abf7f3d36b5ca196a0d8346c7b19b02c&query=${input}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log("data: ", data);
    console.log("datatype: ", typeof data);
    setPost(data);
  };

  return (
    <div id="app">
      <ReactContext.Provider value={{ input, setInput, post, setPost }}>
        Webpage title here in App
        <br />
        <br />
        <SearchBar searchPost={searchPost} />
        <NavBar />
        <DisplayGrid />
      </ReactContext.Provider>
    </div>
  );
}

export default App;
