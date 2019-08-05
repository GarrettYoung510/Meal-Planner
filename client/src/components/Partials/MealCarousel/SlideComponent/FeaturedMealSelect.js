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
// import Row from './../Row/Row';
// import Column from './../Column/Column';
import s from './../style.scss';
import axios from 'axios';

class FeaturedMealSelect extends Component {
  
  state = {
    meal: []
    //https://www.themealdb.com/images/media/meals/xqwwpy1483908697.jpg
  };

  handleIncrement = (item) => {
    
    item.count ? 
    item.count = item.count + 1 :
    item.count = 1

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

    mealSelect = (param) => {
        switch (param) {
            case 'featured':
                axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
                    .then(response => {
                        console.log(response.data.meals)
                        const random = response.data.meals
                        random[0].count = 0
                        this.setState({
                            meal: random
                        })
                    })
                    .catch(error => {
                        console.log(error)
                    })
        }
    }
    
    componentWillMount() {
        let param = this.props.meal
        console.log(param)
        this.mealSelect(param)
    }

    render() {
        let featured = this.state.meal
        console.log(featured)
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
                    className={"border border-danger rounded "}
                >
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
                                {"Count: " + meal.count}
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

export default FeaturedMealSelect