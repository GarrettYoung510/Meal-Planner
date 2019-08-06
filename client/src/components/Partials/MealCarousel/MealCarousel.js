import React, { Component } from "react";
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
// import SlideComponent from './SlideComponent/SlideComponent';
import BreakfastMealSelect from './SlideComponent/BreakfastMealSelect';
import EntreMealSelect from './SlideComponent/EntreMealSelect';
import SideMealSelect from './SlideComponent/SideMealSelect';
import FeaturedMealSelect from './SlideComponent/FeaturedMealSelect';
import s from './style.scss';
import axios from 'axios';

class MealCarousel extends Component {

  mealSelect = (param) => {
    switch (param) {
      case 'featured':
        return <FeaturedMealSelect />
      case 'breakfast':
          return <BreakfastMealSelect />
      case 'entre':
          return <EntreMealSelect />
      case 'side':
        return <SideMealSelect />
    }
  }

class MealCarousel extends Component {
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
          <Slider className={"border border-danger rounded " + s.slider}>
            <Slide index={0}>
              <SlideComponent />
            </Slide>
            <Slide index={1}>
              <SlideComponent />
            </Slide>
            <Slide index={2}>
              <SlideComponent />
            </Slide>
            <Slide index={3}>
              <SlideComponent />
            </Slide>
            <Slide index={4}>
              <SlideComponent />
            </Slide>
            <Slide index={5}>
              <SlideComponent />
            </Slide>
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

export default MealCarousel;
