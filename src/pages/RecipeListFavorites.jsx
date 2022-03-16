import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function RecipeList() {
  const [recipesFavorites, setRecipesFavorites] = useState([]);
  // let recipeList = [];
  const fetchRecipes = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");

      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/favorites`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      setRecipesFavorites(response.data[0].favoriteRecipes);
      console.log(response.data[0].favoriteRecipes);
      // recipeList = response.data[0].favoriteRecipes;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="test">
      <h2>Favorite Recipes</h2>
      {recipesFavorites &&
        recipesFavorites.map((recipe) => {
          return (
            <div key={recipe._id}>
              <Link to={`/recipes/${recipe._id}`}>
                <h3>{recipe.label}</h3>
              </Link>
            </div>
            /* <div>
              <p>fdsasfdssfs</p>
              <p>{recipe.label}</p>
            </div> */
          );
        })}
    </div>
  );
}

export default RecipeList;
