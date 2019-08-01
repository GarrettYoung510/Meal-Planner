import React, { Component } from "react";
import MealCarousel from "../../Partials/MealCarousel/MealCarousel";
import Container from "../../Partials/Container/Container";
import Navbar from "../../Partials/Navbar/Navbar";
import Row from "../../Partials/Row/Row";
import axios from "axios";
// import config from '../../../../../config.js';

class MealSelect extends Component {
  componentDidMount() {
    // // mealdb queries
    // this.getRandomMeal();
    this.getMealOfType();

    // // nutritionix queries
    // this.simpleGet()
    // this.nutritionGet()
    this.nutrientsPost();
  }

  // gets random meal from api can be our featured meal?
  getRandomMeal = async () => {
    try {
      const data = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
      console.log(data);
      console.log(data.data.meals[0]);
      console.log(data.data.meals[0].strMeal);
      // picture of thing pulled
      console.log(data.data.meals[0].strMealThumb);
    } catch (e) {
      console.error(e);
    }
  }

  getMealOfType = async () => {
    try {
      // types/categories to query
      // 'breakfast', 'dessert'

      // lunch and dinner will have a dropdown due to categories available including
      // 'beef', 'chicken', 'goat', 'lamb', 'pasta', 'pork', 'seafood', 'vegan', 'vegetarian' 

      // 'side', 'starter' - this seems like the closest to a snack category but lists appetizers 
      // 'miscellaneous' - sends out random do not use this category

      // we will pull type from the dropdown 
      let type = 'starter';
      const data = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + type);
      console.log(data);
      // // pulls first meal generated
      // console.log(data.data.meals[0]);
      // // name of the meal
      console.log(data.data.meals[0].strMeal);
      let mealSelected = data.data.meals[0].strMeal;
      // this will actually be whichever the user clicks in the carousel
      this.nutrientsPost(mealSelected);
      // // picture of thing pulled
      // console.log(data.data.meals[0].strMealThumb);
    } catch (e) {
      console.error(e);
    }
  }

  // use simple get to get specific meals for breakfast, lunch, dinner, snack
  // populate 5 options
  // when they click one of the options it runs it through nutritionix next option to pull nutrition info


  // 
  nutrientsPost = async (mealSelected) => {
    const URL = "/api/meal";

    try {
      const data = await axios({
        url: URL,
        method: "POST",
        data: {meal: mealSelected},
      });
      console.log(data);
      // add total calories per ingredients found
      // for(let i = 0; i < data.data.foods.length; i++) {
      //   let calories = 0;
      //   calories + data.data.foods[i].nf_calories;
      //   console.log(calories);
      // }
      // console.log(data.data.foods[0].nf_calories);
    } catch (err) {
      console.error(err);
    }
  };



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
