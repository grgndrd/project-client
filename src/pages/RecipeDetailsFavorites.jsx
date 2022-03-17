import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function RecipeDetailsFavorites() {
  const [recipe, setRecipe] = useState([]);
  const { favoriteId } = useParams();
  const location = useLocation();
  const { from } = location.state;
  const recipeObj = from;
  const navigate = useNavigate();

  const storedToken = localStorage.getItem("authToken");

  const deleteRecipe = () => {
    const body = recipeObj;

    axios
      .put(`${process.env.REACT_APP_API_URL}/favorites/${favoriteId}`, body, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => navigate("/favorites"));
  };

  // const deleteFavorite = (recipeObj) => {
  //   const body = recipeObj;

  //   console.log(body);

  //   axios
  //     .put(`${process.env.REACT_APP_API_URL}/add-favorite`, body, {
  //       headers: { Authorization: `Bearer ${storedToken}` },
  //     })
  //     .then((createdRecipe) => {
  //       setIsFavorite(true);
  //     })
  //     .catch((err) => console.log(err));
  // };

  console.log(from);

  return (
    <div className="recipeDetails">
      <h1 className="navLink margin">Recipe Details</h1>
      <h1>{from.label}</h1>
      <img src={from.image} alt={from.label} />
      <ul>
        {from.ingredientLines.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>

      <Link className="Link" to="/favorites">
        {" "}
        Back to Favorite Recipes List
      </Link>
      <button className="Link" onClick={deleteRecipe}>
        {" "}
        Delete Recipe
      </button>
    </div>
  );
}

export default RecipeDetailsFavorites;
