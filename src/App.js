import React from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RecipeList from "./pages/RecipeList.jsx";
import RecipeDetails from "./pages/RecipeDetails.jsx";
import EditRecipePage from "./pages/EditRecipePage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import IsPrivate from "./Components/isPrivate";
import IsAnon from "./Components/isAnon";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/recipes"
          element={
            <IsPrivate>
              <RecipeList />
              <SearchBar></SearchBar>
            </IsPrivate>
          }
        />
        <Route
          path="/recipes/:recipeId"
          element={
            <IsPrivate>
              <RecipeDetails />
            </IsPrivate>
          }
        />
        <Route path="/recipes/edit/:recipeId" element={<EditRecipePage />} />
        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
