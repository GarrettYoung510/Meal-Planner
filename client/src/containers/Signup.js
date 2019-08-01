import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { signup } from "../actions";
import validator from "validator";
import Container from "./../components/Partials/Container/Container";
import Row from "./../components/Partials/Row/Row";
import Column from "./../components/Partials/Column/Column";

class Signup extends Component {
  renderErrors = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div>
          <div>{error}</div>
        </div>
      );
    }
  };

  //   <div class="form-group">
  //     <label for="exampleInputEmail1">Email address</label>
  //     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
  //     <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  //   </div>
  //   <div class="form-group">
  //     <label for="exampleInputPassword1">Password</label>
  //     <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  //   </div>
  //   <div class="form-group form-check">
  //     <input type="checkbox" class="form-check-input" id="exampleCheck1">
  //     <label class="form-check-label" for="exampleCheck1">Check me out</label>
  //   </div>
  //   <button type="submit" class="btn btn-primary">Submit</button>
  // </form>

  renderInput = ({
    name,
    input,
    label,
    meta,
    type,
    min,
    max,
    className,
    id,
    placeholder
  }) => {
    // console.log(meta);
    return (
      <Container>
        <Row className="d-flex justify-content-center mb-3">
          <Column small="12" medium="2" className="d-flex align-items-center">
            <div>{label}</div>
          </Column>
          <Column small="12" medium="9">
            <div>
              <input
                type={type}
                min={min}
                max={max}
                {...input}
                autoComplete="off"
                className={className}
                id={id}
                placeholder={placeholder}
              />
              {this.renderErrors(meta)}
            </div>
          </Column>
        </Row>
      </Container>
    );
  };

  renderRangeInput = ({
    name,
    input,
    label,
    meta,
    type,
    min,
    max,
    className,
    placeholder
  }) => {
    // console.log(meta);
    return (
      <Row className="d-flex justify-content-center mb-3">
        <Column small="12" medium="2">
          <label>{label}</label>
        </Column>
        <Column small="12" medium="7">
          <div>
            <input
              type={type}
              min={min}
              max={max}
              {...input}
              autoComplete="off"
              className={className}
              placeholder={placeholder}
            />
            {this.renderErrors(meta)}
          </div>
        </Column>
        <Column small="12" medium="1">
          <p>{input.value}</p>
        </Column>
      </Row>
    );
  };

  renderRadioInput = ({
    name,
    input,
    label,
    meta,
    type,
    className,
    placeholder
  }) => {
    // console.log(meta);
    return (
      <Container>
        <Row className="d-flex justify-content-center mb-3">
          <Column>
            <p>{label}</p>
          </Column>
          <Column>
            <div>
              <input type={type} {...input} autoComplete="off" />
              {this.renderErrors(meta)}
            </div>
          </Column>
          <Column>
            <p>{input.value}</p>
          </Column>
        </Row>
      </Container>
    );
  };

  onSubmit = formValues => {
    console.log(formValues);
    this.props.signup(formValues, () => {
      this.props.history.push("/profile/:id");
    });
  };

  render() {
    // console.log(this.props);
    const { handleSubmit } = this.props;
    return (
      <Container>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <fieldset>
            <Field
              name="email"
              type="text"
              label="Email"
              component={this.renderInput}
              autoComplete="none"
              className="form-control"
              placeholder="Enter email"
            />
          </fieldset>
          <fieldset>
            <Field
              name="password"
              type="password"
              label="Password"
              component={this.renderInput}
              autoComplete="none"
              className="form-control"
              placeholder="Enter password"
            />
          </fieldset>
          <fieldset>
            <Field
              name="first_name"
              type="text"
              label="First Name"
              component={this.renderInput}
              autoComplete="none"
              className="form-control"
              placeholder="Enter First Name"
            />
          </fieldset>
          <fieldset>
            <Field
              name="last_name"
              type="text"
              label="Last Name"
              component={this.renderInput}
              autoComplete="none"
              className="form-control"
              placeholder="Enter Last Name"
            />
          </fieldset>
          <fieldset>
            <Field
              name="gender"
              component={this.renderRadioInput}
              type="radio"
              value="male"
              className="form-control"
            />
            <Field
              name="gender"
              component={this.renderRadioInput}
              type="radio"
              value="female"
              className="form-control"
            />
          </fieldset>
          <fieldset>
            <Field
              name="height"
              type="range"
              label="Height"
              min="40"
              max="96"
              step="1"
              component={this.renderRangeInput}
              autoComplete="none"
            />
          </fieldset>
          <fieldset>
            <Field
              name="weight"
              type="range"
              label="Weight in Lbs."
              min="75"
              max="400"
              component={this.renderRangeInput}
              autoComplete="none"
            />
          </fieldset>
          <fieldset>
            <Field
              name="age"
              type="range"
              label="Age in Years"
              min="18"
              max="115"
              component={this.renderRangeInput}
              autoComplete="none"
            />
          </fieldset>
          <fieldset>
            <Field
              name="activity_level"
              type="range"
              min="1"
              max="4"
              step="1"
              label="Level of Normal Activity"
              component={this.renderRangeInput}
              autoComplete="none"
            />
          </fieldset>
          <button>Signup</button>
        </form>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

const validate = formValues => {
  const errors = {};
  console.log("validator", formValues);

  if (!formValues.email) {
    errors.email = "You must enter an email";
  }

  if (formValues.email) {
    if (!validator.isEmail(formValues.email)) {
      errors.email = "You must enter a valid email address";
    }
  }

  if (!formValues.password) {
    errors.password = "You must enter a password";
  }

  return errors;
};

export default compose(
  connect(
    mapStateToProps,
    { signup }
  ),
  reduxForm({
    form: "signup",
    validate
  })
)(Signup);
