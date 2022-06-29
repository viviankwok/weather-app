import React, { useContext } from "react";
import ReactContext from "../context/react.context";

const SearchBar = (props) => {
  const reactCtx = useContext(ReactContext);

  const handleChange = (e) => {
    e.preventDefault();
    reactCtx.setInput(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    console.log("add btn clicked");
    props.searchPost(reactCtx.input);
    reactCtx.setInput("");
  };

  return (
    <div className="flex justify-center">
      <form>
        <input
          className="input-box w-80 px-2 py-0.5 rounded drop-shadow-2xl hover:bg-grey text:white"
          type="text"
          placeholder="Weather in..."
          onChange={handleChange}
          value={reactCtx.input}
        ></input>
        <button
          className="button mx-5 w-24 px-2 py-0.5 bg-white drop-shadow-2xl hover:bg-grey text:white rounded"
          onClick={handleAdd}
        >
          Add
        </button>
        {/* <br />
        <br />
        input here: {reactCtx.input} */}
      </form>
    </div>
  );
};

export default SearchBar;
