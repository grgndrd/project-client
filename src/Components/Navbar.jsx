import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { loggedIn, user, logoutUser } = useContext(AuthContext);
  return (
    <nav className="Navbar">
      <Link to="/"> Homepage</Link>
      {loggedIn && (
        <>
          <Link to="/recipes"> Search for Food</Link>
          {user.username}
          <button onClick={logoutUser}>Logout</button>
        </>
      )}

      {!loggedIn && (
        <>
          <Link to="/signup"> Signup</Link>
          <Link to="/login"> Login</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
