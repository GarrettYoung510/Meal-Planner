import React, { Component } from "react";
import MealCarousel from "../../Partials/MealCarousel/MealCarousel";
import Container from "../../Partials/Container/Container";
import Navbar from "../../Partials/Navbar/Navbar";
import Row from "../../Partials/Row/Row";
import axios from "axios";
// import config from '../../../../../config.js';
import Signin from "../../../containers/Signin";
import Signup from "../../../containers/Signup";
import Column from "../../Partials/Column/Column";
import MainCourseDropdown from "../../Partials/MainCourseDropDown/index";
import { type } from "os";
import ShoppingLinks from "../../Partials/ShoppingLinks/index";

class MealSelect extends Component {
  state = {
    // pull the initial meals to select
    mealsArray: ["meal 1", "meal 2"]
  };

  handleMealSelect = value => {
    console.log(value);
    this.getMeals(value);
  };

  // handleMealSelect(value){
  //   console.log(value);
  //   // this.getMeals(value);
  //   console.log(this)
  // }

  componentDidMount() {
    // // mealdb queries
    // this.getRandomMeal();
    // this.getMeals('beef');
    // // nutritionix queries
    // this.simpleGet()
    // this.nutritionGet()
    // this.getMealData("cup noodles");
  }

  // gets random meal from api can be our featured meal?
  // getRandomMeal = async () => {
  //   try {
  //     const data = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
  //     console.log(data);
  //     console.log(data.data.meals[0]);
  //     console.log(data.data.meals[0].strMeal);
  //     // picture of thing pulled
  //     console.log(data.data.meals[0].strMealThumb);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }

  getMeals = async type => {
    const URL = `/api/meal/choose?type=${type}`;
    try {
      const data = await axios({
        url: URL,
        method: "GET"
      });
      console.log("this is the full object: " + data);
      // array of meals under that category
      console.log("this is the meals" + data.data.meals);
      // code for pulling picture from api
      console.log("this is the first meals picture link" + data.data.meals[0].strMealThumb);
      // code for pulling meal name will need this to run through nutrients api
      console.log("this is first meals name" + data.data.meals[0].strMeal);
    } catch (e) {
      console.error(e);
    }
  };

  // use simple get to get specific meals for breakfast, lunch, dinner, snack
  // populate 5 options
  // when they click one of the options it runs it through nutritionix next option to pull nutrition info
  getMealData = async mealSelected => {
    const URL = `/api/meal?meal=${mealSelected}`;
  };

  nutrientsPost = async mealSelected => {
    const URL = "/api/meal";
    try {
      const data = await axios({
        url: URL,
        method: "GET"
        // data: {meal: mealSelected},
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
          <MealCarousel />
          {/* Lunch carousel */}
          <Row>
            <h3>Lunch</h3>
            {/* lunch main course dropdown */}
            <MainCourseDropdown onMealSelect={this.handleMealSelect} />
          </Row>
          <Row>
            <MealCarousel />
          </Row>

          {/* Dinner carousel */}
          <Row>
            <h3>Dinner</h3>
            {/* dinner main course dropdown */}
            <MainCourseDropdown />
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

          <ShoppingLinks />
        </Container>
      </div>
    );
  }
}

export default MealSelect;