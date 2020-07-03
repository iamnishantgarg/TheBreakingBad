import React from "react";
import CharacterItem from "./CharacterItem";
import Spinner from "../ui/Spinner";
const CharacterGrid = ({ isLoading, items }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item, ind) => (
        <CharacterItem item={item} key={ind} />
      ))}
    </section>
  );
};

export default CharacterGrid;
