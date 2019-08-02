import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import MealSelect from '../../Pages/MealSelect';
import Axios from 'axios';
 
class MealCarousel extends React.Component {
  
  mealSelect = (props) =>{
    Axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(function(response) {
        return <image src={response.meals[0].strMealThumb}></image>
      })
      .catch(function(error){
        console.log(error)
      })
  }
  
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={50}
        naturalSlideHeight={50}
        totalSlides={10}

      >
        <Slider
          className="border border-danger rounded"
        >
          <Slide 
            index={0}
          >
            1 {this.props.mealSelect}

          </Slide>
          <Slide 
            index={1}
          >
            2{this.props.mealSelect}
            </Slide>
          <Slide 
            index={2}
          >
            3{this.props.mealSelect}
          </Slide>
          <Slide 
            index={3}
          >
            4{this.props.mealSelect}
          </Slide>
          <Slide 
            index={4}
          >
            5{this.props.mealSelect}
          </Slide>
          <Slide 
            index={5}
          >
            6{this.props.mealSelect}
          </Slide>
          <Slide 
            index={6}
          >
            7{this.props.mealSelect}
          </Slide>
          <Slide 
            index={7}
          >
            8{this.props.mealSelect}
          </Slide>
          <Slide 
            index={8}
          >
            9{this.props.mealSelect}
          </Slide>
          <Slide 
            index={9}
          >
            10{this.props.mealSelect}
          </Slide>
        </Slider>
        <ButtonBack
          className="btn btn-dark"
        >Back</ButtonBack>
        <ButtonNext
          className="btn btn-dark"
        >Next</ButtonNext>
      </CarouselProvider>
    );
  }
}

export default MealCarousel