import React, { Component } from "react";
// import { reduxForm, Field } from 'redux-form';
import { compose } from "redux";
import { connect } from "react-redux";
import { fetchCalc } from "../../../actions";
import MealCarousel from "../../Partials/MealCarousel/MealCarousel";
import Container from "../../Partials/Container/Container";
// import Navbar from "../../Partials/Navbar/Navbar";
import Row from "../../Partials/Row/Row";
import Column from "../../Partials/Column/Column";
import requireAuth from "./../../../hoc/requireAuth";
import Jumbotron from "../../Partials/Jumbotron/Jumbotron";
import Card from "../../Partials/Card/Card";
import ShoppingLinks from "../../Partials/ShoppingLinks/index";

class ProfilePage extends Component {
  componentDidMount() {
    console.log(this.props.user);
    this.props.fetchCalc();
  }

  renderCalc() {
    return this.props.user.map(user => {
      return (
        <div key={user._id}>
          <p>{user._id}</p>
          <p>{user.email}</p>
          <p>{user.first_name}</p>
          <p>{user.last_name}</p>
          <p>{user.age}</p>
          <p>{user.gender}</p>
          <p>{user.weight}</p>
          <p>{user.height}</p>
          <p>{user.activity_level}</p>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Column>
              <h1 class="text-center" class="text-warning">
                Your Profile this is a change
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
                <h5>Name: Ronald</h5>
                <h5>Email: ronald@ron.com</h5>
                <h5>Height: 6'3"</h5>
                <h5>Weight: 187</h5>
                <h5>Gender: Male</h5>
                <h5>Activity Level: Sedentary</h5>
              </Column>

              <Column small={12} medium={6} large={6} offset-lg={1}>
                <a float-right>
                  <h5 class="text-warning">Nutritional Info</h5>
                  <h5>Calories: 5634</h5>
                  <h5>Macros</h5>
                  <h6>- Protein: 1291 cal</h6>
                  <h6>- Fat: 1987 cal</h6>
                  <h6>- Carbs: 2356 cal</h6>
                </a>
              </Column>
            </Row>
          </Card>
        </Container>
        {/* meals container */}
        <Container>
          <Container>
            <Card>
              <Row>
                <h2 class="text-warning">Selected Meals</h2>
              </Row>
              <MealCarousel />
              <h9>carousel made with love by ryan</h9>
            </Card>
          </Container>
        </Container>
        {/* grocery store/ delivery/ online shopping links */}
        <br />
        <Container>
          <h1 class="text-warning">Start Shopping Right Away!</h1>
          <ShoppingLinks />
        </Container>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

const formedComponent = compose(
  connect(
    mapStateToProps,
    { fetchCalc }
  )
)(ProfilePage);

export default requireAuth(formedComponent);
