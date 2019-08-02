import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signin } from "../actions";
import Container from './../components/Partials/Container/Container'


class Signin extends Component {

  onSubmit = formValues => {
    this.props.signin(formValues, () => {
      this.props.history.push('/counter');
    });
  }

  renderInput = ({ input }) => {
    return <input {...input}/>;
  }

  render() {
    console.log(this.props);
    const { handleSubmit } = this.props;
    return (
      <Container>
        <br/>
        <br/>
        <h1>Welcome to Meal Planner</h1>
        <br/>
        <h5>Please enter your account's email and password below</h5>
        <br/>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <fieldset>
            <label>Email</label>
            <Field
              name='email'
              type='text'
              label='Email'
              component={this.renderInput}
              autoComplete='none'/>
          </fieldset>
          <fieldset>
            <label>Password</label>
            <Field
              name='password'
              type='password'
              label='password'
              component={this.renderInput}
              autoComplete='none'/>
          </fieldset>
          <button type="button" className="btn btn-lg btn-success">Signin</button>
          <div>{this.props.errorMessage}</div>
        </form>
      </Container>
    );
  }
}

function mapStateToProps(state){
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, { signin }),
  reduxForm({ form: 'signin' })
)(Signin);