import React, { Component } from 'react'

export class UserForm extends Component {
  state = {
    step: 1,
    postalCode: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    city: 'London',
    province: 'Ontario'
  }

  //Proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    })
  }

  //Go back to the previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    })
  }

  //Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default UserForm
