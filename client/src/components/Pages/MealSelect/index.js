import React, { Component } from "react";
import MealCarousel from "../../Partials/MealCarousel/MealCarousel";
import Container from "../../Partials/Container/Container";
import Navbar from "../../Partials/Navbar/Navbar";
import Row from "../../Partials/Row/Row";

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
          <Row>
            <MealCarousel />
          </Row>
          {/* Lunch carousel */}
          <Row>
            <h3>Lunch</h3>
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
