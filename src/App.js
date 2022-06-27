import React from "react";
import DisplayGrid from "./components/DisplayGrid";
import NavBar from "./components/NavBar";
import "./styles.css";

function App() {
  return (
    <div id="app">
      Webpage title here in App
      <NavBar />
      <DisplayGrid />
    </div>
  );
}

export default App;
