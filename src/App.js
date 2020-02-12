import React, { Component } from 'react';

import './App.css';

import FormServiceDetails1 from './components/FormServiceDetails/FormServiceDetails1';
import FormServiceDetails2 from './components/FormServiceDetails/FormServiceDetails2';
import FormServiceDetails3 from './components/FormServiceDetails/FormServiceDetails3';
import FormUserDetails from './components/FormUserDetails';

class App extends Component {
  state = {
    step: 1,
    postalCode: '',
    professional: '',
    serviceType: '',
    //Service Details
    serviceDetail: '',
    servicePriority: '',
    //User Form
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: ''
  }

  //HANDLE STEPS
  nextStep = () => {
    const step = this.state.step;
    this.setState({
      step: step + 1
    })
  }

  prevStep = () => {
    const step = this.state.step;
    this.setState({
      step: step - 1
    })
  }

  //UPDATE STATE
  updatePostalCode = (e) => {

    //TODO: Validate the Postal Code according to the London list of postal code
    //in this first step requests will be made only by customers from London, ON

    (this.state.step === 1) ? this.setState({ postalCode: e.target.value }) : this.setState({ postalCode: e })
  }

  updateProfessional = (childData) => {
    this.setState({ professional: childData })
  }

  updateServiceType = (childData) => {
    this.setState({ serviceType: childData })
  }

  updateServiceDetail = (childData) => {
    this.setState({ serviceDetail: childData })
  }

  updateServicePriority = (childData) => {
    this.setState({ servicePriority: childData })
  }

  updateFirstName = (childData) => {
    this.setState({ firstName: childData })
  }

  updateLastName = (childData) => {
    this.setState({ lastName: childData })
  }

  updatePhoneNumber = (childData) => {
    this.setState({ phoneNumber: childData })
  }

  updateEmailAddress = (childData) => {
    this.setState({ emailAddress: childData })
  }

  render() {
    const step = this.state.step;

    return (
      <div className="App">

        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <div class="container">
            <a class="navbar-brand" href="#">Get Your Quote - London</a>
            <div class="form-inline my-2 my-lg-0" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <button type="button" class="btn btn-light">I'm a professional</button>
              </ul>
            </div>
          </div>
        </nav>

        <div className="jumbotron">
          <div className="container">
            <h1 className="display-4">Get your quote</h1>
            <p className="lead">Get FREE quotes for any job around the home.</p>
            <hr className="my-4" />

            <div className="mainForm">
              {/* POSTAL CODE FORM */}
              {step === 1 &&
                <div>
                  <div className="postalInput">
                    <h3>Where in the London do you live?</h3>
                    <p>We have been receiving request only from Londoners, if you are not from London we are sorry, as soon as possible you will hear about us in the whole Canada.</p>
                    <input type="text" className="form-control form-control-lg" id="postalCode" placeholder="Postal Code" value={this.state.postalCode} onChange={this.updatePostalCode} />
                    <br></br>
                  </div>
                  <button type="button" className="btn btn-primary" onClick={this.nextStep}>Get Started</button>
                </div>
              }
              {/* PROFESSIONAL TYPE FORM */}
              {step === 2 && (
                < FormServiceDetails1
                  step={this.state.step}
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  professional={this.state.professional}
                  updateProfessional={this.updateProfessional}
                />
              )}
              {/* SERVICE TYPE FORM */}
              {step === 3 && (
                < FormServiceDetails2
                  step={this.state.step}
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  professional={this.state.professional}
                  serviceType={this.state.serviceType}
                  updateServiceType={this.updateServiceType}
                />
              )}
              {/* SERVICE DETAILS FORM */}
              {step === 4 && (
                < FormServiceDetails3
                  step={this.state.step}
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  serviceDetail={this.state.serviceDetail}
                  servicePriority={this.state.servicePriority}
                  updateServiceDetail={this.updateServiceDetail}
                  updateServicePriority={this.updateServicePriority}
                />
              )}
              {/* USER DETAILS FORM */}
              {step === 5 && (
                < FormUserDetails
                  step={step}
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  firstName={this.state.firstName}
                  lastName={this.state.lastName}
                  phoneNumber={this.state.phoneNumber}
                  emailAddress={this.state.emailAddress}
                  postalCode={this.state.postalCode}
                  updateFirstName={this.updateFirstName}
                  updateLastName={this.updateLastName}
                  updatePhoneNumber={this.updatePhoneNumber}
                  updateEmailAddress={this.updateEmailAddress}
                  updatePostalCode={this.updatePostalCode}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
