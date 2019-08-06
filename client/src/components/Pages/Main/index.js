import React from "react";
import Container from "../../Partials/Container/Container";
import Row from "../../Partials/Row/Row";
import Column from "../../Partials/Column/Column";
import Jumbotron from "../../Partials/Jumbotron/Jumbotron";
import MealCarousel from "../../Partials/MealCarousel/MealCarousel";

const Main = () => {
  return (
      <Container>
        <Jumbotron />
        <Row>
          <Column small={12}>
            <h1>Featured Meals</h1>
          </Column>
        </Row>
        <MealCarousel mealSelect="featured"/>
        <Row>
          <Column small={12} medium={4}>
            <h1>Benefit #1</h1>
          </Column>
          <Column small={12} medium={4}>
            <h1>Benefit #2</h1>
          </Column>
          <Column small={12} medium={4}>
            <h1>Benefit #3</h1>
          </Column>
        </Row>
        <Row>
          <Container>
            <h1>Section for featured meals goes here</h1>
          </Container>
        </Row>
      </Container>
  );
};

export default Main;
