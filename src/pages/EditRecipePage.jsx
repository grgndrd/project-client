import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditRecipePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { recipeId } = useParams();

  const navigate = useNavigate();

  const deleteRecipe = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/recipes/${recipeId}`)
      .then(() => navigate("/recipes"));
  };

  const fetchProject = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/recipes/${recipeId}`
      );
      let { title, description } = response.data;
      setTitle(title);
      setDescription(description);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { title, description };

    console.log(body);

    axios
      .put(`${process.env.REACT_APP_API_URL}/recipes/edit/${recipeId}`, body)
      .then((response) => {
        setTitle("");
        setDescription("");
        navigate(`/recipes/${recipeId}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="recipeList">
      <h1>Edit Recipes</h1>
      <form className="recipeList" onSubmit={handleSubmit}>
        <label htmlFor="title">
          <b className="">Title</b>
        </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="description">
          <b>Description</b>
        </label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="Link" type="submit">
          Edit Recipe
        </button>
      </form>
      <button className="Link" onClick={deleteRecipe}>
        {" "}
        Delete Recipe
      </button>
    </div>
  );
}

export default EditRecipePage;
