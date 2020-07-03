import React from "react";
import CharacterItem from "./CharacterItem";
const CharacterGrid = ({ isLoading, items }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {items.map((item, ind) => (
        <CharacterItem item={item} key={ind} />
      ))}
    </section>
  );
};

export default CharacterGrid;
