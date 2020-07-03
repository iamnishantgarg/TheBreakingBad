import React, { useState, useEffect } from "react";
import CharacterGrid from "./components/Characters/CharacterGrid";
import axios from "axios";
import Search from "./components/ui/Search";
import "./App.css";
import Header from "./components/ui/Header";
const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters/?name=${query}`
      );
      // console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search setQuery={(v) => setQuery(v)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
