import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";
import axios from 'axios'

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;

  const storedToken = localStorage.getItem("authToken");

  const addToFavorite = (recipeObj) => {
    const body = recipeObj;

    console.log(body)

    axios
      .put(`${process.env.REACT_APP_API_URL}/add-favorite`, body, {
        headers: { Authorization: `Bearer ${storedToken}` }} )
      .then((createdRecipe) => {
        setIsFavorite(true)
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        {" "}
        URL{" "}
      </a>
      <button onClick={() => addToFavorite(recipe.recipe)}>Add to Favorites</button>
      <button onClick={() => setShow(!show)}>Ingredients</button>
      {show && <RecipeDetails ingredients={ingredients} />}
    </div>
  );
};

export default Recipe;
