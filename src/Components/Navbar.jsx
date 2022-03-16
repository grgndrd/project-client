import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { loggedIn, user, logoutUser } = useContext(AuthContext);
  return (
    <nav className="Navbar">
      <h1>ironCook</h1>
      <Link to="/"> Homepage</Link>
      {loggedIn && (
        <>
          <Link className="classLink" to="/recipes">
            Recipes
          </Link>
          <Link className="classLink" to="/recipes-search">
            Search for Food
          </Link>
          <Link className="classLink" to="/favorites">
            Favorites
          </Link>
          {user.username}
          <button onClick={logoutUser}>Logout</button>
        </>
      )}

      {!loggedIn && (
        <>
          <Link className="classLink" to="/signup">
            {" "}
            Signup
          </Link>
          <Link className="classLink" to="/login">
            {" "}
            Login
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
