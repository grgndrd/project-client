import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context.js";

function RecipeList() {
  const [recipesFavorites, setRecipesFavorites] = useState([]);
  const { user } = useContext(AuthContext);
  // let recipeList = [];
  const fetchRecipes = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");

      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/favorites/${user._id}`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      setRecipesFavorites(response.data);
      console.log(response.data);
      console.log(response);
      // recipeList = response.data[0].favoriteRecipes;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="recipeList">
      <h1>Favorite Recipes</h1>
      {recipesFavorites &&
        recipesFavorites.map((recipe) => {
          return (
            <div key={recipe._id}>
              <Link className="Link" to={`/favorites/${recipe.label}`} state={{ from: recipe }}>
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
