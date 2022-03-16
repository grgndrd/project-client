import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddForm from "../Components/AddForm";
import { AuthContext } from "../context/auth.context.js";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");

      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/recipes`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      setRecipes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="test">
      <h2>Recipes List</h2>
      {recipes && recipes.map((recipe) => {
        return (
          <div key={recipe._id}>
            <Link to={`/recipes/${recipe._id}`}>
              <h3>{recipe.title}</h3>
            </Link>
          </div>
        )
      })}
    </div>
  );
}

export default RecipeList;
