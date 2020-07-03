import React, { useState } from "react";

const Search = ({ setQuery }) => {
  const [text, setText] = useState("");

  const onChange = (value) => {
    setText(value);
    setQuery(value);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Characters"
          autoFocus
          value={text}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Search;
