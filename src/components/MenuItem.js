import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ image, name }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <Link to="/contact">
          <button> Click here to create review! </button>
      </Link>
    </div>
  );
}

export default MenuItem;
