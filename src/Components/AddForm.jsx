import React, { useState,  } from "react";
import axios from "axios";
import { AuthContext } from '../context/auth.context.js'
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
        headers: { Authorization: `Bearer ${storedToken}` }} )
      .then((createdRecipe) => {
        setTitle("");
        setDescription("");
        navigate(`/recipes`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Add Recipes</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default AddForm;
