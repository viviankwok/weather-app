import React, { useContext } from "react";
import ReactContext from "../context/react.context";

const SearchBar = (props) => {
  const reactCtx = useContext(ReactContext);

  const handleChange = (e) => {
    e.preventDefault();
    reactCtx.setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit btn clicked");
    props.searchPost(reactCtx.input);
    reactCtx.setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="input-box"
          type="text"
          placeholder="Weather in..."
          onChange={handleChange}
          value={reactCtx.input}
        ></input>
        <button className="button" type="submit">
          Add
        </button>
        <br />
        <br />
        input here: {reactCtx.input}
      </form>
    </div>
  );
};

export default SearchBar;
