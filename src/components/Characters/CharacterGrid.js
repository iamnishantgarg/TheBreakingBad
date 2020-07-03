import React from "react";

const CharacterGrid = ({ isLoading, items }) => {
  return isLoading ? <h1>Loading...</h1> : <section></section>;
};

export default CharacterGrid;
