import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  let navigate = useNavigate();
  const storedToken = localStorage.getItem("authToken");

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { title, description };

    axios
      .post(`${process.env.REACT_APP_API_URL}/recipes/create`, body, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((createdRecipe) => {
        setTitle("");
        setDescription("");
        navigate(`/recipes`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="recipeList">
      <h1 className="margin navLink">Add Recipes</h1>
      <form className="recipeList" onSubmit={handleSubmit}>
        <label htmlFor="title">
          <b className="navLink">Title</b>
        </label>
        <input
          className="margin"
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="description">
          <b className="navLink">Description</b>
        </label>
        <textarea
          className="margin"
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="Link" type="submit">
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddForm;
