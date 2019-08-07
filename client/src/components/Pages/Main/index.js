import React from "react";
import Container from "../../Partials/Container/Container";
import Row from "../../Partials/Row/Row";
import Column from "../../Partials/Column/Column";
import Jumbotron from "../../Partials/Jumbotron/Jumbotron";
import FeaturedMealSelect from "../../Partials/MealCarousel/SlideComponent/FeaturedMealSelect";

const Main = () => {
  return (
    <Container mb="mb-5">
      <Jumbotron />
      <Row>
        <Column small={12}>
          <h1>Featured Meals</h1>
        </Column>
      </Row>
      <FeaturedMealSelect />
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
    </Container>
  );
};

export default Main;