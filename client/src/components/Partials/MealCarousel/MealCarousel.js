import React, { Component } from 'react';
import Axios from 'axios';
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
// import s from './style.scss';
 
class MealCarousel extends Component {
  
  state={
    image1src: "https://www.themealdb.com/images/media/meals/xqwwpy1483908697.jpg",
    count: 0
  }

  mealSelect = () => {
    Axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(response => {
        this.setState ({
          image1src: response.data.meals[0].strMealThumb
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
  
  componentWillMount(){
    this.mealSelect();
  }

  render() {
    console.log(this.state.image1src)
    return (
      <Row>
        <Column
          small={12}
        >
          <CarouselProvider
            visibleSlides={3}
            totalSlides={6}
            step={1}
            naturalSlideWidth={250}
            naturalSlideHeight={250}
          >
              <Slider
                className={"border border-danger rounded "}
              >
                <Slide
                  index={0}
                >
                  <SlideComponent >
                  <Image
                    src={this.state.image1src}
                  />
                  </SlideComponent>
                </Slide>
                <Slide 
                  index={1}
                >
                  <SlideComponent >
                  <Image
                    src={this.state.image1src}
                  />
                  </SlideComponent>
                </Slide>
                <Slide 
                  index={2}
                >
                  <Image 
                    src={this.state.image1src}
                  />
                </Slide>
                <Slide 
                  index={3}
                >
                  <Image 
                    src={this.state.image1src}
                  />
                </Slide>
                <Slide 
                  index={4}
                >
                  <Image 
                    src={this.state.image1src}
                  />
                </Slide>
                <Slide 
                  index={5}
                >
                  <Image 
                    src={this.state.image1src}
                  />
                </Slide>
              </Slider>
              <ButtonBack
                className="btn btn-dark"
              >
                Back
              </ButtonBack>
              <ButtonNext
                className="btn btn-dark"
              >
                Next
              </ButtonNext>
          </CarouselProvider>
        </Column>
      </Row>
    );
  }
}

export default MealCarousel