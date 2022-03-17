import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { loggedIn, user, logoutUser } = useContext(AuthContext);
  return (
    <nav className="Navbar">
      <h1>ironCook</h1>
      <Link className="navLink" to="/">
        {" "}
        Home
      </Link>
      {loggedIn && (
        <>
          <Link className="navLink" to="/recipes">
            Recipes
          </Link>
          <Link className="navLink" to="/recipes-search">
            Search for Food
          </Link>
          <Link className="navLink" to="/favorites">
            Favorites
          </Link>
          <p className="navLink">Hello, {user.username}</p>
          <button className="Link" onClick={logoutUser}>
            Logout
          </button>
        </>
      )}

      {!loggedIn && (
        <>
          <Link className="navLink" to="/signup">
            {" "}
            Signup
          </Link>
          <Link className="navLink" to="/login">
            {" "}
            Login
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
