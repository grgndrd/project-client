import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function RecipeDetails() {
  const [recipe, setRecipe] = useState(null);
  const { recipeId } = useParams();

  const fetchRecipe = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/recipes/${recipeId}`
      );
      setRecipe(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(recipe);

  useEffect(() => {
    fetchRecipe();
  }, []);

  return (
    <div className="recipeList">
      {recipe && (
        <>
          <h1 className="navLink margin">{recipe.title}</h1>
          <b>
            <p className="navLink">made by chef:{recipe.chef.username}</p>
          </b>
          <b>
            <p className="navLink">{recipe.description}</p>
          </b>
        </>
      )}

      {recipe && (
        <Link className="Link" to={`/recipes/edit/${recipe._id}`}>
          Edit Recipe
        </Link>
      )}
      <Link className="Link" to="/recipes">
        {" "}
        Back to Recipes List
      </Link>
    </div>
  );
}

export default RecipeDetails;
