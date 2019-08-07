import React, { Component } from "react";

export default class MainCourseDropDown extends Component {
  state = {
    display: false,
    categories: [
      "Beef",
      "Chicken",
      "Goat",
      "Lamb",
      "Pasta",
      "Pork",
      "Seafood",
      "Vegan",
      "Vegetarian"
    ],
    // choice: null
  };

  handleButtonClick = () => {
    this.setState({ display: !this.state.display });
  };

  handleMealClick = async (category, index) => {
    console.log(category)
    this.props.onMealSelect(category);
    this.setState({ display: !this.state.display });
  };

  renderSwitch() {
    switch(this.state.ca) {
      case this.state.choice :
        return this.state.choice;
      default: 
        return <p>Select Meal Type</p>;

    }
  }

  render() {
    console.log("triggered")
    console.log(this.state);
    return (
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={this.handleButtonClick}
        >
          {this.renderSwitch} 
          {/* Select Meal Type */}
        </button>
        <div
          className="dropdown-menu dropdown-menu-right"
          aria-labelledby="dropdownMenuButton"
          style={{ display: this.state.display ? "block" : "none" }}
        >
          {this.state.categories.map((category, index) => {
            return (
              // function defined that onclick returns index of meal clicked
              <li
                onClick={() => {
                  this.handleMealClick(category, index);
                }}
                className="dropdown-item"
                key={index}
              >
                {category}
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}
