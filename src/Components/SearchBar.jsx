import React, { useState } from "react";
import axios from "axios";
import Recipe from "./Recipe";
import { v4 as uuidv4 } from "uuid";
import Alert from "./Alert";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const API_URL = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`;

  const getData = async () => {
    if (query !== "") {
      const result = await axios.get(API_URL);
      if (!result.data.more) {
        return setAlert("No food with such name");
      }
      setRecipes(result.data.hits);
      console.log(result);
      setAlert("");
      setQuery("");
    } else {
      setAlert("Please fill the form");
    }
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <div className="searchBar">
      <h1 onClick={getData}>Search Food</h1>
      <form className="search-form" onSubmit={onSubmit}>
        {alert !== "" && <Alert alert={alert} />}
        <input
          type="text"
          placeholder="Search Food"
          autoComplete="off"
          onChange={onChange}
          value={query}
        />
        <input type="submit" value="search" />
      </form>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map((recipe) => <Recipe key={uuidv4()} recipe={recipe} />)}
      </div>
    </div>
  );
}

export default SearchBar;
