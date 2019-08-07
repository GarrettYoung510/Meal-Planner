import React, { Component } from "react";
// import { reduxForm, Field } from 'redux-form';
import { compose } from "redux";
import { connect } from "react-redux";
import { fetchCalc } from "../../../actions";
// import MealCarousel from "../../Partials/MealCarousel/MealCarousel";
import Container from "../../Partials/Container/Container";
// import Navbar from "../../Partials/Navbar/Navbar";
import Row from "../../Partials/Row/Row";
import Column from "../../Partials/Column/Column";
import requireAuth from "./../../../hoc/requireAuth";
// import Jumbotron from "../../Partials/Jumbotron/Jumbotron";
import Card from "../../Partials/Card/Card";
import ShoppingLinks from "../../Partials/ShoppingLinks/index";

class ProfilePage extends Component {
  componentDidMount() {
    this.props.fetchCalc();
    console.log("this is inside profilepage", this.props.user);
    console.log(this.props)
  }

  height() {
    console.log(this.props.user.height)
    const feet = Math.floor(this.props.user.height / 12)
    const inches = this.props.user.height - feet * 12;
    if (inches > 0) {
      return feet + "' " + inches + '"';
    } else {
      return feet + "'";
    }
  }

  weight() {
    return this.props.user.weight + " lbs.";
  }

  activity_level() {
    if (parseInt(this.props.user.activity_level) === 1) {
      return "Sedentary";
    } else if (parseInt(this.props.user.activity_level) === 2) {
      return "Less Active";
    } else if (parseInt(this.props.user.activity_level) === 3) {
      return "Moderately Active";
    } else if (parseInt(this.props.user.activity_level) === 4) {
      return "Very Active";
    }
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Column>
              <h1 class="text-center" class="text-warning">
                Your Profile
              </h1>
            </Column>
          </Row>
        </Container>

        {/* authentication container */}
        <Container class="bg-dark">
          <Card>
            <Row>
              {/* column 1 (user body info) */}
              <Column small={12} medium={6} large={6} offset-lg={1}>
                {/* <h4>User Info</h4> */}
                <h5>
                  Name: {this.props.user.first_name} {this.props.user.last_name}
                </h5>
                <h5>Email: {this.props.user.email}</h5>
                <h5>Height: {this.props.user.height}</h5>
                <h5>Weight: {this.props.user.weight}</h5>
                <h5>Gender: {this.props.user.gender}</h5>
                <h5>Activity Level: {this.props.user.activity_level}</h5>
              </Column>

              <Column small={12} medium={6} large={6} offset-lg={1}>
                <a float-right>
                  <h5 class="text-warning">Nutritional Info</h5>
                  <h5>Daily Calories: {this.props.user.calories}</h5>
                  <h5>Macros</h5>
                  <h6>- Protein: {this.props.user.protein} grams</h6>
                  <h6>- Fat: {this.props.user.fat} grams</h6>
                  <h6>- Carbs: {this.props.user.carb} grams</h6>
                </a>
              </Column>
            </Row>
          </Card>
        </Container>
        <br />
        <Container>
          <h1 class="text-warning">Get Started!</h1>
          <a
            class="btn btn-warning"
            float-right
            href="mealselect"
            target="_blank"
          >
            Start Selecting Your Meals
          </a>
        </Container>
        <Container>
          {/* selected meals */}
          <Card>
            <Row>
              <h2 class="text-warning">Selected Meals</h2>
            </Row>
          </Card>
        </Container>
        {/* grocery store/ delivery/ online shopping links */}
        <br />
        <Container>
          <h2 class="text-warning">Links to Grocery Delivery!</h2>
        </Container>
        <Container>
          <ShoppingLinks />
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("mapState", state);
  // return { user: state.user }
  return state.user;
}

const formedComponent = compose(
  connect(
    mapStateToProps,
    { fetchCalc }
  )
)(ProfilePage);

export default requireAuth(formedComponent);
