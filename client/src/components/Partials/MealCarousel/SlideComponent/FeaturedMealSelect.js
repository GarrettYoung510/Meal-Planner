import React, { Component } from "react";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
  Image
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import s from "./../style.scss";
import axios from "axios";

class FeaturedMealSelect extends Component {
  state = {
    meals: []
  };


  // handleIncrement = index => {
  //   // console.log(index)
  //   this.setState(prevState => {
  //     const newMeals = [...this.state.meals];
  //     newMeals[index].count += 1;
  //     return { meals: newMeals };
  //   });
  // };

  handleFavorite = index => {
    console.log('you have favorited this meal: ' + JSON.stringify(this.state.meals[index].strMeal));
    alert('you have favorited this meal: ' + JSON.stringify(this.state.meals[index].strMeal));
    // this.setState(prevState => {
    //   const newMeals = [...this.state.meals];
    //   newMeals[index].count -= 1;
    //   return { meals: newMeals };
    // });

  };

  mealDisplay = () => {
    const promises = [];
    for (let i = 0; i < 6; i++) {
      const result = axios.get(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      promises.push(result);
    }
    Promise.all(promises).then(values => {
      values.forEach(random => {
        const meal = random.data.meals[0];
        meal.count = 0;
        const URL = `/api/meal?meal=${meal.strMeal}`;
        axios.get(URL).then(res => {
          console.log(res.data.foods);
          // attaches calories to meal object
          let calories = 0;
          if (res.data.foods) {
            for (let i = 0; i < res.data.foods.length; i++) {
              calories += res.data.foods[i].nf_calories;
            }
          }
          meal.calories = Math.floor(calories);
          let protein = 0;
          if (res.data.foods) {
            for (let i = 0; i < res.data.foods.length; i++) {
              protein += res.data.foods[i].nf_protein;
            }
          }
          meal.protein = Math.floor(protein);

          let carbs = 0;
          if (res.data.foods) {
            for (let i = 0; i < res.data.foods.length; i++) {
              carbs += res.data.foods[i].nf_total_carbohydrate;
            }
          }
          meal.carbs = Math.floor(carbs);

          let fat = 0;
          if (res.data.foods) {
            for (let i = 0; i < res.data.foods.length; i++) {
              fat += res.data.foods[i].nf_total_fat;
            }
          }
          meal.fat = Math.floor(fat);

          this.setState({ meals: [...this.state.meals, meal] });
        });
      });
    });
  };

  componentWillMount() {
    this.mealDisplay();
  }


  render() {
    return (
      <CarouselProvider
        visibleSlides={3}
        totalSlides={6}
        step={1}
        naturalSlideWidth={250}
        naturalSlideHeight={250}
        hasMasterSpinner
      >
        <div className={s.container}>
          <Slider className="border border-danger rounded">
            {this.state.meals.map((item, index) => {
              return (
                <Slide>
                  <div
                    style={{
                      display: "flex",
                      "flex-direction": "column",
                      "align-items": "flex-start"
                    }}
                  >
                    <Image
                      src={item.strMealThumb}
                      style={{ position: "absolute", "z-index": -1 }}
                    />
                    <div
                      style={{
                        "z-index": 1,
                        position: "absolute",
                        bottom: "10%",
                        "align-self": "center"
                      }}
                    >
                      <p
                        style={{
                          background: "rgba(235, 235, 235, 0.6)",
                          "text-align": "center",
                          "font-weight": "900"
                        }}
                      >
                        {item.strMeal}
                      </p>
                      <p
                        style={{
                          background: "rgba(235, 235, 235, 0.6)",
                          "text-align": "center",
                          "font-weight": "900"
                        }}
                      >
                        {"Carbs: " + item.carbs + "g Fat: " + item.fat + "g Protein: " + item.protein + "g"}
                      </p>
                      <p
                        style={{
                          background: "rgba(235, 235, 235, 0.6)",
                          "text-align": "center",
                          "font-weight": "900"
                        }}
                      >
                        {"Calories: " + item.calories}
                      </p>
                      <p>
                        <button
                          className="btn-block btn-dark text-center"
                          type="button"
                          // style={{
                          //   "text-align": "center",
                          // }}
                          onClick={() => {
                            this.handleFavorite(index);
                          }}
                        >
                          Favorite
                        </button>
                        {/* <button
                          className="btn btn-dark"
                          type="button"
                          onClick={() => {
                            this.handleIncrement(index);
                          }}
                        >
                          +1

                        </button> */}
                      </p>
                    </div>
                  </div>
                </Slide>
              );
            })}
          </Slider>
          <ButtonBack className={"btn btn-dark" + s.buttonBack}>
            Back
          </ButtonBack>
          <ButtonNext className={"btn btn-dark" + s.buttonNext}>
            Next
          </ButtonNext>
        </div>
      </CarouselProvider>
    );
  }
}

export default FeaturedMealSelect;