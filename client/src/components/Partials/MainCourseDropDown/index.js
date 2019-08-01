import React from "react";

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
        <a className="dropdown-item" href="#">
          Beef
        </a>
        <a className="dropdown-item" href="#">
          Chicken
        </a>
        <a className="dropdown-item" href="#">
          Goat
        </a>
        <a className="dropdown-item" href="#">
          Lamb
        </a>
        <a className="dropdown-item" href="#">
          Pasta
        </a>
        <a className="dropdown-item" href="#">
          Pork
        </a>
        <a className="dropdown-item" href="#">
          Seafood
        </a>
        <a className="dropdown-item" href="#">
          Vegan
        </a>
        <a className="dropdown-item" href="#">
          Vegetarian
        </a>
      </div>
    </div>
  );
};

export default MainCourseDropdown;
