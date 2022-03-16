import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");

      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/favorites`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      setRecipes(response.data);
      console.log(response.data);
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
      {recipes &&
        recipes.map((recipe) => {
          return (
            <div key={recipe.favoriteRecipes._id}>
              <Link to={`/recipes/${recipe.favoriteRecipes._id}`}>
                <h3>{recipe.favoriteRecipes.title}</h3>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default RecipeList;
