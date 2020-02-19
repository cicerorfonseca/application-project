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
    professionalsList: []
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

  updateProfessionalsList = (childData) => {
    this.setState({ professionalsList: childData })
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
                    <h3>Where in the London do you live?</h3>
                    <p>We have been receiving request only from Londoners, if you are not from London we are sorry, as soon as possible you will hear about us in the whole Canada.</p>
                    <input type="text" className="form-control form-control-lg" id="postalCode" placeholder="Postal Code" value={this.state.postalCode} onChange={this.updatePostalCode} />
                    <br></br>
                    <div className="get-started-btn">
                      <button type="button" className="btn btn-primary custom-btn" onClick={this.nextStep}>Get Started</button>
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
                  professional={this.state.professional}
                  updateProfessionalsList={this.updateProfessionalsList}
                  professionalsList={this.state.professionalsList}
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
