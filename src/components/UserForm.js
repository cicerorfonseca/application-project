import React, { Component } from 'react';
import FormUserPostalCode from './FormUserPostalCode';

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    city: 'London',
    province: 'Ontario',
    postalCode: ''
  }

  //Proceed to the next step
  nextStep = () => {
    const step = this.state.step;
    this.setState({
      step: step + 1
    })
  }

  //Go back to the previous step
  prevStep = () => {
    const step = this.state.step;
    this.setState({
      step: step - 1
    })
  }

  //Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  render() {
    //Put the data out of the state
    const step = this.state.step;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const phone = this.state.phone;
    const email = this.state.email;
    const city = this.state.city;
    const province = this.state.province;
    const postalCode = this.state.postalCode;

    switch (step) {
      //First step, POSTAL CODE form
      case 1:
        return (
          <FormUserPostalCode
            //Props
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            postalCode={this.state.postalCode}
          />
        )

      //Second Step, SERVICE DETAILS form
      case 2:
        return (
          <h1>FormServiceDetails</h1>
        )

      //Third Step, USER DETAILS form
      case 3:
        return (
          <h1>FormUserDetails</h1>
        )

      //Fourth Step, SUBMITION form
      case 4:
        return (
          <h1>FormConfirm</h1>
        )

      //Fifth Step, SUCCESS form
      case 5:
        return (
          <h1>FormSuccess</h1>
        )
    }

  }
}

export default UserForm;
