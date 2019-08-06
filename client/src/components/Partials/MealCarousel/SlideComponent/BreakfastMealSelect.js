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
import s from './../style.scss';
import axios from 'axios';

class BreakfastMealSelect extends Component {

    state = {
        meal: "",
        param: ""
        //https://www.themealdb.com/images/media/meals/xqwwpy1483908697.jpg
      };
    
    handleIncrement = (item) => {
    
        item.count ? 
        item.count = item.count + 1 :
        item.count = 1
    
        //Clone Meal
        const newMeal = this.state.meal
        //Change object in meal to increment count
        // if()
        //store meal back to state
    
        // this.setState({
        //     meal: meal.item
        // })
        
        // this.state.item.count ?
        //   this.setState(prevState => {
            //     return { count: prevState.count + 1}
            //   }) :
            //   item.count = 1
    }
    
    handleDecrement = (item) => {
        item.count ? 
        item.count = item.count - 1 :
        item.count = 0
        // this.state.item.count ?
        // this.setState(prevState => {
        //   return { count: prevState.count - 1}
        // }) :
        // item.count = 0
    }
    
    mealSelect = () => {
        console.log("MS")
        switch (this.state.param) {
            case 'breakfast':
                const breakfastArray = [];
                axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=breakfast")
                    .then(breakfast => {
                        console.log("breakfast link")
                        console.log(breakfast)
                        const newMeal = breakfast.data.meals
                        newMeal.map(each => each.count = 0 )
                        breakfastArray.push(newMeal)
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    this.setState({
                        meal: breakfastArray
                    })
                    this.carousel()
        }
    }
    
    carousel = () => { 
        let breakfast = this.state.meal
        console.log(this.props.meal)
        console.log(this.state)
        console.log("breakfast")
        console.log(breakfast)
        console.log(breakfast.length)
        breakfast.map(function(item) {
            console.log("item")
            console.log(item)
            return (
                <Slide>
                    <div style={{
                        "display": "flex",
                        "flex-direction": "column", 
                        "align-items": "flex-start"
                    }}>
                        <Image src={item.strMealThumb} style={{"position": "absolute", "z-index": -1}}/>
                        <div style={{"z-index": 1, "position": "absolute", "bottom": "10%", "align-self": "center"}}>
                            <p style={{"background": "rgba(235, 235, 235, 0.6)", "text-align": "center"}}>
                                {item.strMeal}
                            </p>
                            <p style={{"background": "rgba(235, 235, 235, 0.6)", "text-align": "center"}}>
                                {"Count: " + item.count}
                            </p>
                            <p>
                                <button className={"btn btn-dark"} type="button" onClick={this.handleDecrement()}>-1</button>
                                <button className={"btn btn-dark"} type="button" onClick={this.handleIncrement()}>+1</button>
                            </p>
                        </div>
                    </div>
                </Slide>
            )
        })
    }
    
        
    componentWillMount() {
        console.log("CWM")
        console.log(this.props.meal)
        this.setState({
            param: this.props.meal
        })
        console.log(this.state.param)
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
                <Slider
                    className="border border-danger rounded"
                >
                    {this.mealSelect()}
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
        )
    }
}

export default BreakfastMealSelect;