import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handlePassword = (e) => setPassword(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { username, password };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/signup`, body)
      .then((response) => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="recipeList">
      <h1>Signup</h1>
      <form className="recipeList" onSubmit={handleSubmit}>
        <label className="margin" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUsername}
        />

        <label className="margin" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <button className="Link" type="submit">
          {" "}
          Signup
        </button>
      </form>
    </div>
  );
}

export default SignupPage;
