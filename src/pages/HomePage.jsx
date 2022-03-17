import React from "react";
import goodfood from "../assets/goodfood.jpeg";

function HomePage() {
  return (
    <div className="homeFlex">
      <div>
        <h2 className="navLink">Welcome,</h2>
        <p className="navLink">
          Lorem ipsum dolor sit amet consectetur
          <p>adipisicing elit. Natus ad sunt explicabo. </p>
          Magnam vel voluptatem odit autem, molestiae id.
        </p>
      </div>
      <img
        className="marginPicture"
        src={goodfood}
        alt="foodtable"
        width={"600px"}
      ></img>
    </div>
  );
}

export default HomePage;
