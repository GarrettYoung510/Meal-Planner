import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { signin } from "../actions";

import Container from "./../components/Partials/Container/Container";
import Row from "./../components/Partials/Row/Row";
import Column from "./../components/Partials/Column/Column";
import FeaturedMealSelect from "./../components/Partials/MealCarousel/SlideComponent/FeaturedMealSelect"

class Signin extends Component {
  onSubmit = formValues => {
    this.props.signin(formValues, () => {
      this.props.history.push("/profilepage");
    });
  };

  renderInput = ({ input }) => {
    return <input {...input} />;
  };

  render() {
    console.log(this.props);
    const { handleSubmit } = this.props;
    return (
      <Container class="text-center">
        <br />
        <br />
        <h1>Welcome to Meal Planner!</h1>
        <br />
        <h5>Please login to see your profile</h5>
        <br />
        <Row>
          <Column small="12" medium="6" large="5">
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <fieldset>
                <label>Email</label>
                <br />
                <Field
                  name="email"
                  type="text"
                  label="Email"
                  component={this.renderInput}
                  autoComplete="none"
                  />
              </fieldset>
              <br/>
              <fieldset>
                <label>Password</label>
                <br />
                <Field
                  name="password"
                  type="password"
                  label="password"
                  component={this.renderInput}
                  autoComplete="none"
                  />
              </fieldset>
              <br />
              <button className="btn btn-lg btn-outline-warning">Sign In</button>
              <div>{this.props.errorMessage}</div>
            </form>
          </Column>
          <Column small="12" medium="6" large="5">
            <p>Don't have a profile yet?</p>
            <button className="btn btn-lg btn-outline-warning">Sign Up</button>
            <br />
          </Column>
        </Row>
        <br />
        <Row>
          <Column small={12}>
            <h2>Consider Adding These Meals To You Mix</h2>
          </Column>
        </Row>
        <FeaturedMealSelect />
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(
    mapStateToProps,
    { signin }
  ),
  reduxForm({ form: "signin" })
)(Signin);
// Collapse;
