import React from "react";
import goodfood from "../assets/goodfood.jpeg";

function HomePage() {
  return (
    <div className="homeFlex">
      <div>
        <h2>Welcome,</h2>
        <p>
          If you're lazy and need some recipes,
          <p>you're welcome to join this</p>
          community of not-so-creative cooks!
        </p>
      </div>
      <img className="marginPicture" src={goodfood} alt="foodtable" width={"600px"}></img>
    </div>
  );
}

export default HomePage;
