import React, { Component } from "react";
import MealCarousel from "../../Partials/MealCarousel/MealCarousel";
import Container from "../../Partials/Container/Container";
import Navbar from "../../Partials/Navbar/Navbar";
import Row from "../../Partials/Row/Row";
import Signin from "../../../containers/Signin";
import Signup from "../../../containers/Signup";

class MealSelect extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Container>
          <Row>
            <h1>Meal Select Page</h1>
          </Row>
        </Container>

        {/* Breakfast carousel */}
        <Container>
          <Row>
            <h3>Breakfast</h3>
          </Row>
          <Container>
            <Row>
              <MealCarousel />
            </Row>
          </Container>

          {/* Lunch carousel */}
          <Row>
            <h3>Lunch</h3>
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
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
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
          </Row>
          <Row>
            <MealCarousel />
          </Row>

          {/* Dinner carousel */}
          <Row>
            <h3>Dinner</h3>
          </Row>
          <Row>
            <MealCarousel />
          </Row>

          {/* Snack Carousel */}
          <Row>
            <h3>Snack</h3>
          </Row>
          <Row>
            <MealCarousel />
          </Row>
          <Row>
            <Container>
              <h1>Link to shopping list generator goes here</h1>
            </Container>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MealSelect;
