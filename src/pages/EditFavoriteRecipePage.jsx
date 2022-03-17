import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditRecipePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { recipeId } = useParams();

  const navigate = useNavigate();

  const storedToken = localStorage.getItem("authToken");
  
  const deleteRecipe = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/favorites/${recipeId}`)
      .then(() => navigate("/favorites"));
  };

  const fetchProject = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/favorites/${recipeId}`
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
      .put(`${process.env.REACT_APP_API_URL}/favorites/edit/${recipeId}`, body)
      .then((response) => {
        setTitle("");
        setDescription("");
        navigate(`/favorites/${recipeId}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="recipeList">
      <h3>Edit Recipes</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Edit Project</button>
      </form>
      <button onClick={deleteRecipe}> Delete Project</button>
    </div>
  );
}

export default EditRecipePage;
