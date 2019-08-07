import React from "react";
import Container from "../../Partials/Container/Container";
import Row from "../../Partials/Row/Row";
import Column from "../../Partials/Column/Column";
import Jumbotron from "../../Partials/Jumbotron/Jumbotron";
// import MealCarousel from "../../Partials/MealCarousel/MealCarousel";
import FeaturedMealSelect from "../../Partials/MealCarousel/SlideComponent/FeaturedMealSelect";
import Card from "../../Partials/Card/Card";

const Main = () => {
  return (
    <Container>
      <Jumbotron />
      <Row>
        <Column small={12}>
          <h1>Featured Meals</h1>
        </Column>
      </Row>
      <FeaturedMealSelect />
      <Row>
        <Column small={12} medium={4}>
          <Card>
            <h1 class="text-warning">Easy</h1>
            <h3>Eliminates the hassle of frequent grocery shopping</h3>
          </Card>
        </Column>
        <Column small={12} medium={4}>
          <Card>
            <h1 class="text-warning">Healthy</h1>
            <h3>
              Adding variety to your diet has been proven to increase health
            </h3>
          </Card>
        </Column>
        <Column small={12} medium={4}>
          <Card>
            <h1 class="text-warning">Exciting</h1>
            <h3>Try new and exciting dishes without worrying about health</h3>
          </Card>
        </Column>
      </Row>
    </Container>
  );
};

export default Main;
