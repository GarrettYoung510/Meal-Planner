import React, { Component } from "react";
import MealCarousel from "../../Partials/MealCarousel/MealCarousel";
import Container from "../../Partials/Container/Container";
import Navbar from "../../Partials/Navbar/Navbar";
import Row from "../../Partials/Row/Row";

class ProfilePage extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Row>
          <h1>"HEADLINE" title of profile page</h1>
        </Row>
        {/* authentication container */}
        <Container>
          <Row>
            <h1>INSERT PROFILE INFO HERE</h1>
          </Row>
        </Container>
        {/* meals container */}
        <Container>
          <Row>
            <h2>Selected Meals/ your meals</h2>
          </Row>
          <Container>
            <MealCarousel />
          </Container>
        </Container>
        {/* grocery store/ delivery/ online shopping links */}
        <Container>links go here</Container>
      </div>
    );
  }
}

export default ProfilePage;
