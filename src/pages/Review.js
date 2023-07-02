import React from "react";
import img from "../assets/stars2.jpg";
import "../styles/Review.css";
import { Link } from "react-router-dom";

function Review() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="rightSide">
        <h1> Create Review!</h1>
        <p>Reviews will be held for verification.</p>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <Link to="/recieve">
          <button type="submit"> Submit Review</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Review;
