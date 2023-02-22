import React from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../Icons/SearchIcon";

const Search = () => {
  const [text, setText] = React.useState("");
  const nav = useNavigate();

  const onSearchClick = () => {
    const isValid = text !== "" || text !== null;
    if (!isValid) {
      return;
    }

    const q = text.split(" ").join("+");
    nav(`/search/${q}`);
  };
  return (
    <div className="flex gap-3">
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        type="search"
        placeholder="Post title"
        name="search"
        required
      />

      <button onClick={onSearchClick}> <SearchIcon/> </button>
    </div>
  );
};

export default Search;
