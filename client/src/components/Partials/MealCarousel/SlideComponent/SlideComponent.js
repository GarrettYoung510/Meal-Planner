import React from 'react';
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

class SlideComponent extends React.Component {
  

  state = {
    count: 0,
  };

  


  // constructor() {
  //   super();

  //   this.handleIncrement = this.handleIncrement.bind(this);
  //   this.handleDecrement = this.handleDecrement.bind(this);
  // }

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
      <div>
        <div>
          <p>
            Count:
            { this.state.count }
          </p>
          <p>
            <button type="button" onClick={this.handleDecrement}>-1</button>
            <button type="button" onClick={this.handleIncrement}>+1</button>
          </p>
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default SlideComponent;