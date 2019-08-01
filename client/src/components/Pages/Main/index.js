import React from "react";
import Navbar from "../../Partials/Navbar/Navbar";
import Container from "../../Partials/Container/Container";
import Row from "../../Partials/Row/Row";
import Column from "../../Partials/Column/Column";
import Jumbotron from "../../Partials/Jumbotron/Jumbotron";
import MealCarousel from "../../Partials/MealCarousel/MealCarousel";

const Main = () => {
  return (
    <div className="App">
      <Container>
        <Navbar />
      </Container>
      <Container>
        <Row>
          <Jumbotron />
        </Row>
        <Row>
          <MealCarousel />
        </Row>
        <Row>
          <Column small={12} medium={4} large={3} offset-lg={1}>
            <h1>Benefit #1</h1>
          </Column>
          <Column small={12} medium={4} large={3} offset-lg={1}>
            <h1>Benefit #2</h1>
          </Column>
          <Column small={12} medium={4} large={3}>
            <h1>Benefit #3</h1>
          </Column>
        </Row>
        <Row>
          <Container>
            <h1>Section for featured meals goes here</h1>
          </Container>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
