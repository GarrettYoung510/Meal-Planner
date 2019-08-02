import React, { Component } from 'react';
import Axios from 'axios';
import { Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

// const INCREMENT = 'INCREMENT';
// const DECREMENT = 'DECREMENT';

// export default function reducer(state = initialState, action = {}) {
//   switch (action.type) {
//     case INCREMENT: {
//       let { count } = state;
//       count += 1;
//       return Object.assign({}, state, { count });
//     }
//     case DECREMENT: {
//       let { count } = state;
//       count -= 1;
//       return Object.assign({}, state, { count });
//     }
//     default:
//       return state;
//   }
// }

class SlideComponent extends Component {
  
  state = {
    count: 0,
    src: "https://www.themealdb.com/images/media/meals/xqwwpy1483908697.jpg"
  };

  mealSelect = () => {
    Axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(response => {
        this.setState ({
          src: response.data.meals[0].strMealThumb
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
  
  componentWillMount(){
    this.mealSelect();
  }


  handleIncrement = () => {
    // this.props.setIncrement();
    this.setState((prevState) => {
      return { count: prevState.count + 1}
    })
  }

  handleDecrement = () => {
    // this.props.setDecrement();
    // this.setState({count: this.state.count + 1})
    this.setState((prevState) => {
      return { count: prevState.count - 1}
    })
  }

  render() {
    return (
      <div style={{
        "display": "flex",
        "flex-direction": "column", 
        "align-items": "flex-start"
      }}>
         {/* <div
           style={
             {"background-image": `url("${this.state.src}")`, "height": "100%"}
           }>
           {this.props.children}
         </div> */}
        <Image src={this.state.src} style={{"position": "absolute", "z-index": -1}}/>
        <div style={{"z-index": 1, "position": "absolute", "bottom": "10%", "align-self": "center"}}>
          <p style={{"background": "rgba(235, 235, 235, 0.6)", "text-align": "center"}}>
            Meal Name
          </p><p style={{"background": "rgba(235, 235, 235, 0.6)", "text-align": "center"}}>
            {"Count: " + this.state.count}
          </p>
          <p>
            <button className={"btn btn-dark"} type="button" onClick={this.handleDecrement}>-1</button>
            <button className={"btn btn-dark"} type="button" onClick={this.handleIncrement}>+1</button>
          </p>
        </div>
      </div>
    );
  }
}

export default SlideComponent;