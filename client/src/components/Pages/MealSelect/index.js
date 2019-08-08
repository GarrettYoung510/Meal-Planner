import React, { Component } from "react";
// import MealCarousel from "../../Partials/MealCarousel/MealCarousel";
import Container from "../../Partials/Container/Container";
import Row from "../../Partials/Row/Row";
import axios from "axios";
// import config from '../../../../../config.js';
// import Signin from "../../../containers/Signin";
// import Signup from "../../../containers/Signup";
import Column from "../../Partials/Column/Column";
import MainCourseDropdown from "../../Partials/MainCourseDropDown/index";
// import { type } from "os";
import ShoppingLinks from "../../Partials/ShoppingLinks/index";
import BreakfastMealSelect from "../../Partials/MealCarousel/SlideComponent/BreakfastMealSelect";
import EntreMealSelect from "../../Partials/MealCarousel/SlideComponent/EntreMealSelect";
import SideMealSelect from "../../Partials/MealCarousel/SlideComponent/SideMealSelect";

class MealSelect extends Component {
  state = {
    // pull the initial meals to select
    mealsArray: ["meal 1", "meal 2"],
    // entre: "Chicken",
    // entreMealSel
    totalCalories: localStorage.getItem("calories"),
    totalProtein: localStorage.getItem("protein"),
    totalFat: localStorage.getItem("fat"),
    totalCarbs: localStorage.getItem("carbs")
  };
  // entreMealSelect = null
  // entreState = (cb) => {
  //   this.entreMealSelect = cb
  // }

  handleMealSelect = value => {
    // console.log(value)
    this.setState({
      entre: value
    });
    // console.log(value);
    // this.getMeals(value);
  };

  // getMeals = async type => {
  //   this.setState({
  //     entre: type
  //   })
  // const URL = `/api/meal/choose?type=${type}`;
  // try {
  //   const data = await axios({
  //     url: URL,
  //     method: "GET"
  //   })
  //   console.log("this is the full object: " + data);
  //   // array of meals under that category
  //   console.log("this is the meals" + data.data.meals);
  //   // code for pulling picture from api
  //   console.log("this is the first meals picture link" + data.data.meals[0].strMealThumb);
  //   // code for pulling meal name will need this to run through nutrients api
  //   console.log("this is first meals name" + data.data.meals[0].strMeal);
  //   // this.setState({
  //   //   entre: data.data.meals
  //   // })
  // } catch (e) {
  //   console.error(e);
  // }
  // };

  // use simple get to get specific meals for breakfast, lunch, dinner, snack
  // populate 5 options
  // when they click one of the options it runs it through nutritionix next option to pull nutrition info

  // getMealData = async mealSelected => {
  //   const URL = `/api/meal?meal=${mealSelected}`;
  // };

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
          <br />
          <br />
          <Row>
            <Column>
              <h1>Meal Select Page</h1>
              <h3>Recommended</h3>
              <h4>Calories: {Math.round(this.state.totalCalories)}</h4>
              <h3>Protein: {this.state.totalProtein} g</h3>
              <h3>Fat: {this.state.totalFat} g</h3>
              <h3>Carbs: {this.state.totalCarbs} g</h3>
            </Column>
          </Row>
          <br />
        </Container>

        {/* Breakfast carousel */}
        <Container>
          <Row>
            <Column>
              <h3>Breakfast</h3>
            </Column>
          </Row>
          <br/>
          <BreakfastMealSelect />
          <br/>
          {/* Lunch & Dinner combined carousel */}
          <EntreMealSelect />

          {/* Snack Carousel */}
          <Row>
            <h3>Side</h3>
          </Row>
          <SideMealSelect />
          <br/><br/>
          <Container>  
            <button className="btn btn-warning">Submit Meal Selections
            </button>
          </Container>
          <ShoppingLinks />
        </Container>
      </div>
    );
  }
}

export default MealSelect;
