import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signup } from "../actions";
import validator from 'validator';

class Signup extends Component {
  renderErrors = ({ error, touched }) => {
    if(touched && error) {
      return (
        <div>
          <div>{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ name, input, label, meta, type, choice, min, max}) => {
    // console.log(meta);
    return (
      <div className={name}>
        <label>{label}</label>
        <div>
          <input type={type} min={min} max={max} {...input} autoComplete='off'/>
          {this.renderErrors(meta)}
        </div>
      </div>
    );
  }
  
  renderInputDisplay = ({ name, input, label, meta, type, min, max, }) => {
    // console.log(meta);
    // findValue = formValues => {
    //   console.log(formValues)
    // }
    console.log(input.value);
    return (
      <div className={input.name}>
        <label>{label}</label>
        <div>
          <span>
            <input type={type} min={min} max={max} {...input} autoComplete='off'/>
              {this.renderErrors(meta)} 
              {input.value}
          </span>
        </div>
      </div>
    );
  }

  onSubmit = formValues => {
    console.log(formValues);
    this.props.signup(formValues, () => {
      this.props.history.push('/profile/:id');
    });
  }

  render() {
    // console.log(this.props);
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <Field
            name='email'
            type='text'
            label='Email'
            component={this.renderInput}
            autoComplete='none'/>
        </fieldset>
        <fieldset>
          <Field
            name='password'
            type='password'
            label='Password'
            component={this.renderInput}
            autoComplete='none'/>
        </fieldset>
        <fieldset>
          <Field
            name='first_name'
            type='text'
            label='First Name'
            component={this.renderInput}
            autoComplete='none'/>
        </fieldset>
        <fieldset>
          <Field
            name='last_name'
            type='text'
            label='Last Name'
            component={this.renderInput}
            autoComplete='none'/>
        </fieldset>
        <fieldset>
          <label>Gender</label>
          <div>
            <label><Field name="gender" component="input" type="radio" value="male"/> Male</label>
            <label><Field name="gender" component="input" type="radio" value="female"/> Female</label>
          </div>
        </fieldset>
        <fieldset>
          <Field
            name='height'
            type='range'
            label='Height'
            min='40'
            max='96'
            step='1'
            component={this.renderInputDisplay}
            autoComplete='none'
            />
        </fieldset>
        <fieldset>
          <Field
            name='weight'
            type='number'
            label='Weight in Lbs.'
            min='75'
            max='400'
            component={this.renderInput}
            autoComplete='none'
            />
        </fieldset>
        <fieldset>
          <Field
            name='age'
            type='number'
            label='Age in Years'
            min='18'
            max='115'
            component={this.renderInput}
            autoComplete='none'
            />
        </fieldset>
        <fieldset>
          <Field
            name='activity_level'
            type='range'
            min='1'
            max='4'
            step='1'
            label='Level of Normal Activity'
            component={this.renderInputDisplay}
            autoComplete='none'
            />
        </fieldset>
        <button>Signup</button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}


const validate = formValues => {
  const errors = {};
  console.log("validator", formValues);

  if(!formValues.email) {
    errors.email = 'You must enter an email';
  }

  if(formValues.email){
    if(!validator.isEmail(formValues.email)) {
      errors.email = "You must enter a valid email address";
    }
  }

  if(!formValues.password){
    errors.password = "You must enter a password";
  }

  return errors;

};


export default compose(
  connect(mapStateToProps, { signup }),
  reduxForm({
    form: 'signup',
    validate
  })
)(Signup);

