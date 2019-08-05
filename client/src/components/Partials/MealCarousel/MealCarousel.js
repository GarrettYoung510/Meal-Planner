import React, { Component } from 'react';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
  Image
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Row from './../Row/Row';
import Column from './../Column/Column';
import SlideComponent from './SlideComponent/SlideComponent';
import BreakfastMealSelect from './SlideComponent/BreakfastMealSelect';
import EntreMealSelect from './SlideComponent/EntreMealSelect';
import SideMealSelect from './SlideComponent/SideMealSelect';
import s from './style.scss';
import axios from 'axios';

class MealCarousel extends Component {
  
  state = {
    count: 0,
    featuredMeal: [],
    breakfastMeal: [],
    entreMeal: [],
    sideMeal: []
    //https://www.themealdb.com/images/media/meals/xqwwpy1483908697.jpg
  };

  handleIncrement = (item) => {
    
    item.count ? 
    item.count = item.count + 1 :
    item.count = 1
    // this.state.item.count ?
    //   this.setState(prevState => {
    //     return { count: prevState.count + 1}
    //   }) :
    //   item.count = 1
  }

  handleDecrement = (item) => {
    console.log(item)
    // this.state.item.count ?
    // this.setState(prevState => {
    //   return { count: prevState.count - 1}
    // }) :
    // item.count = 0
  }

  mealSelect = (param) => {
    switch (param) {
      case 'featured':
        axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
          .then(response => {
            this.setState({
              featuredMeal: response.data.meals
            })
          })
          .catch(error => {
            console.log(error)
          })
        
      case 'breakfast':
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + param)
          .then(response => {
            // console.log(response.data.meals)
            this.setState({
              breakfastMeal: response.data.meals
            })
          })
          .catch(error => {
            console.log(error)
          })
        
      // case 'entre':

      //   axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + param)
      //     .then(response => {
      //       return response.meals
      //     })
      //     .catch(error => {
      //       console.log(error)
      //     })
      case 'side':
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + param)
        .then(response => {
          this.setState({
            sideMeal: response.data.meals
          })
        })
          .catch(error => {
            console.log(error)
          })
    }
  }
    
  componentWillMount() {
    let param = this.props.meal
    this.mealSelect(param)
  }

  render() {
    // console.log(this.state.breakfastMeal)
    let featured = this.state.featuredMeal
    let breakfast = this.state.breakfastMeal
    let side = this.state.sideMeal
    // let param = this.props.meal
    // this.mealSelect(param)
    // console.log(this.state.breakfastMeal)
    // console.log(this.state.meal)
    return (
      <CarouselProvider
        visibleSlides={3}
        totalSlides={breakfast.length}
        step={1}
        naturalSlideWidth={250}
        naturalSlideHeight={250}
        hasMasterSpinner
      >
        <div className={s.container}>
          <Slider
            className={"border border-danger rounded " + s.slider
          }>
            {/* MAP THROUGH FEATURED */}
            {featured.map(meal => {
              console.log(meal)
              return (
                <Slide>
                  <div style={{
                    "display": "flex",
                    "flex-direction": "column", 
                    "align-items": "flex-start"
                  }}>
                    <Image src={meal.strMealThumb} style={{"position": "absolute", "z-index": -1}}/>
                    <div style={{"z-index": 1, "position": "absolute", "bottom": "10%", "align-self": "center"}}>
                      <p style={{"background": "rgba(235, 235, 235, 0.6)", "text-align": "center"}}>
                        {meal.strMeal}
                      </p>
                      <p style={{"background": "rgba(235, 235, 235, 0.6)", "text-align": "center"}}>
                        {"Count: " + this.state.count}
                      </p>
                      <p>
                        <button className={"btn btn-dark"} type="button" onClick={this.handleDecrement(meal)}>-1</button>
                        <button className={"btn btn-dark"} type="button" onClick={this.handleIncrement(meal)}>+1</button>
                      </p>
                    </div>
                  </div>
                </Slide>
              )
            })}

            {/* MAP THROUGH BREAKFAST */}
            {breakfast.map(meal => {
              // console.log(meal)
              return (
                <Slide>
                  <div style={{
                    "display": "flex",
                    "flex-direction": "column", 
                    "align-items": "flex-start"
                  }}>
                    <Image src={meal.strMealThumb} style={{"position": "absolute", "z-index": -1}}/>
                    <div style={{"z-index": 1, "position": "absolute", "bottom": "10%", "align-self": "center"}}>
                      <p style={{"background": "rgba(235, 235, 235, 0.6)", "text-align": "center"}}>
                        {meal.strMeal}
                      </p>
                      <p style={{"background": "rgba(235, 235, 235, 0.6)", "text-align": "center"}}>
                        {"Count: " + this.state.count}
                      </p>
                      <p>
                        <button className={"btn btn-dark"} type="button" onClick={this.handleDecrement(meal)}>-1</button>
                        <button className={"btn btn-dark"} type="button" onClick={this.handleIncrement(meal)}>+1</button>
                      </p>
                    </div>
                  </div>
                </Slide>
              )
            })}

            {/* MAP THROUGH Side */}
            {side.map(meal => {
              console.log(meal)
              return (
                <Slide>
                  <div style={{
                    "display": "flex",
                    "flex-direction": "column", 
                    "align-items": "flex-start"
                  }}>
                    <Image src={meal.strMealThumb} style={{"position": "absolute", "z-index": -1}}/>
                    <div style={{"z-index": 1, "position": "absolute", "bottom": "10%", "align-self": "center"}}>
                      <p style={{"background": "rgba(235, 235, 235, 0.6)", "text-align": "center"}}>
                        {meal.strMeal}
                      </p>
                      <p style={{"background": "rgba(235, 235, 235, 0.6)", "text-align": "center"}}>
                        {"Count: " + this.state.count}
                      </p>
                      <p>
                        <button className={"btn btn-dark"} type="button" onClick={this.handleDecrement(meal)}>-1</button>
                        <button className={"btn btn-dark"} type="button" onClick={this.handleIncrement(meal)}>+1</button>
                      </p>
                    </div>
                  </div>
                </Slide>
              )
            })}
          </Slider>
          <ButtonBack
            className={"btn btn-dark" + s.buttonBack}
          >
            Back
          </ButtonBack>
          <ButtonNext
            className={"btn btn-dark" + s.buttonNext}
          >
            Next
          </ButtonNext>
        </div>
      </CarouselProvider>
    );
  }
}

export default MealCarousel