import React, { Component } from 'react';

import './App.css';

import Form01ProType from './RequestForm/Form01ProType';
import Form02JobType from './RequestForm/Form02JobType';
import Form03JobDetails from './RequestForm/Form03JobDetails';
import Form04UserDetails from './RequestForm/Form04UserDetails';
import Form05ProSelection from './RequestForm/Form05ProSelection';

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
    emailAddress: '',
    professionalsList: [],
    selectedProfessionals: []
  }

  //HANDLE STEPS
  //Both functions increase and decrease the state step, that is responsible for showing and hidding the components
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
  //The functions bellow update the state object
  updatePostalCode = (e) => {
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

  updateProfessionalsList = (childData) => {
    this.setState({ professionalsList: childData })
  }

  updateSelectedProfessionals = (childData) => {
    this.setState({ selectedProfessionals: [...this.state.selectedProfessionals, childData] })
  }

  //VALIDATE CEP
  //This function gets the postal code value, 
  //validates if it is a valid postal code from London, ON, and returns a flag value.
  validate = () => {
    var flag = false;
    var postalCode = document.getElementById("postalCode").value;
    var postalCodes = ["N6E", "n6e", "N6P", "n6p",
      "N6N", "n6n", "N6M", "n6m",
      "N6L", "n6l", "N6K", "n6k",
      "N6J", "n6j", "N6G", "n6g",
      "N5V", "n5v", "N5Z", "n5z",
      "N5Y", "n5y", "N5X", "n5x",
      "N6B", "n6b", "N6A", "n6a",
      "N6C", "n6c", "N6H", "n6h",
      "N6W", "n6w"];

    for (var i = 0; i < postalCodes.length; i++) {
      if (postalCode.substring(0, 3) == postalCodes[i]) {
        flag = true;
        this.nextStep();
      }
    }
    if (flag === false) {
      alert("Please enter a London Postal Code");
      this.render();
    }
  }

  render() {
    const step = this.state.step;

    return (
      <div className="App">

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <a className="navbar-brand" href="http://localhost:3000/">Get Your Quote - London</a>
            <div className="form-inline my-2 my-lg-0" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <button type="button" className="btn btn-light">I'm a professional</button>
              </ul>
            </div>
          </div>
        </nav>

        <div className="jumbotron">
          <div className="container">
            <div className="jumbotronHeader">
              <h1 className="display-4">Get your quote</h1>
              <p className="lead">Get FREE quotes for any job around the home.</p>
              <hr className="my-4" />
            </div>

            <div className="mainForm">
              {/* POSTAL CODE FORM */}
              {step === 1 &&
                <div>
                  <div className="requestForm">
                    <h3>Where in London do you live?</h3>
                    <p>We are currently only receiving requests from residents of London. Please check back soon to see when support will be added for you area.</p>
                    <input type="text" className="form-control form-control-lg" id="postalCode" placeholder="Postal Code" value={this.state.postalCode} onChange={this.updatePostalCode} />
                    <br></br>
                    <div className="get-started-btn">
                      <button type="button" className="btn btn-primary custom-btn" onClick={this.validate}>Get Started</button>
                    </div>
                  </div>
                </div>
              }
              {/* PROFESSIONAL TYPE FORM */}
              {step === 2 && (
                < Form01ProType
                  step={this.state.step}
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  professional={this.state.professional}
                  updateProfessional={this.updateProfessional}
                />
              )}
              {/* SERVICE TYPE FORM */}
              {step === 3 && (
                < Form02JobType
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
                < Form03JobDetails
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
                < Form04UserDetails
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
              {/* USER DETAILS FORM */}
              {step === 6 && (
                < Form05ProSelection
                  step={step}
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  postalCode={this.state.postalCode}
                  professional={this.state.professional}
                  serviceType={this.state.serviceType}
                  serviceDetail={this.state.serviceDetail}
                  servicePriority={this.state.servicePriority}
                  firstName={this.state.firstName}
                  lastName={this.state.lastName}
                  phoneNumber={this.state.phoneNumber}
                  emailAddress={this.state.emailAddress}
                  selectedProfessionals={this.state.selectedProfessionals}
                  updateProfessionalsList={this.updateProfessionalsList}
                  professionalsList={this.state.professionalsList}
                  updateSelectedProfessionals={this.updateSelectedProfessionals}
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
