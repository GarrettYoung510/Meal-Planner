import React from "react";
import { Link } from "react-router-dom";

const MainCourseDropdown = props => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Select Main Course
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <Link className="dropdown-item" to="/">
          Beef
        </Link>
        <Link className="dropdown-item" to="/">
          Chicken
        </Link>
        <Link className="dropdown-item" to="/">
          Goat
        </Link>
        <Link className="dropdown-item" to="/">
          Lamb
        </Link>
        <Link className="dropdown-item" to="/">
          Pasta
        </Link>
        <Link className="dropdown-item" to="/">
          Pork
        </Link>
        <Link className="dropdown-item" to="/">
          Seafood
        </Link>
        <Link className="dropdown-item" to="/">
          Vegan
        </Link>
        <Link className="dropdown-item" to="/">
          Vegetarian
        </Link>
      </div>
    </div>
  );
};

export default MainCourseDropdown;
