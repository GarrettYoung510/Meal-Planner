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
import s from './style.scss';
 
class MealCarousel extends Component {
 
  
  // meal = (placeholder) => {
    //   return placeholder;
    // }
    
  render() {
    console.log(SlideComponent)
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
            className={"border border-danger rounded " + s.slider}
          >

            {/* Needs connection to Slide Component */}
            <SlideComponent />

            {/* <Slide
              index={0}
            >
              <SlideComponent mealSelect={this.meal}/>
            </Slide>
            <Slide 
              index={1}
            >
              <SlideComponent mealSelect={this.meal}/>
            </Slide>
            <Slide 
              index={2}
            >
              <SlideComponent mealSelect={this.meal}/>
            </Slide>
            <Slide 
              index={3}
            >
              <SlideComponent mealSelect={this.meal}/>
            </Slide>
            <Slide 
              index={4}
            >
              <SlideComponent mealSelect={this.meal}/>
            </Slide>
            <Slide 
              index={5}
            >
              <SlideComponent mealSelect={this.meal}/>
            </Slide> */}
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