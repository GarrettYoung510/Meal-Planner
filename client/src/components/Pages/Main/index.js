import React from "react";
import Container from "../../Partials/Container/Container";
import Row from "../../Partials/Row/Row";
import Column from "../../Partials/Column/Column";
import Jumbotron from "../../Partials/Jumbotron/Jumbotron";
import MealCarousel from "../../Partials/MealCarousel/MealCarousel";
import Card from "../../Partials/Card/Card";

const Main = () => {
  return (
    <Container>
      <Jumbotron />
      <Container>
        <h1 class="text-warning">Featured Meals</h1>
        <MealCarousel />
      </Container>
      <Row>
        <Column small={12} medium={4} large={3} offset-lg={1}>
          <Card>
            <h1>Benefit #1</h1>
          </Card>
        </Column>
        <Column small={12} medium={4} large={3} offset-lg={1}>
          <Card>
            <h1>Benefit #2</h1>
          </Card>
        </Column>
        <Column small={12} medium={4} large={3}>
          <Card>
            <h1>Benefit #3</h1>
          </Card>
        </Column>
      </Row>
    </Container>
  );
};

export default Main;
