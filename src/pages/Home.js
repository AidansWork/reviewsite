import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/thumb.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> MyReview </h1>
        <p> Please leave your reviews on our services.</p>
        <Link to="/menu">
          <button> Review Here! </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
