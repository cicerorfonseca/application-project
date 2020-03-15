import React, { Component } from 'react';

import './App.css';

// Service Request Form
import Form01PostalCode from './RequestForm/Form01PostalCode';
import Form02ProType from './RequestForm/Form02ProType';
import Form03JobType from './RequestForm/Form03JobType';
import Form04JobDetails from './RequestForm/Form04JobDetails';
import Form05JobPriority from './RequestForm/Form05JobPriority';
import Form06UserDetails from './RequestForm/Form06UserDetails';
import Form07ProSelection from './RequestForm/Form07ProSelection';
import Form08Success from './RequestForm/Form08Success';

// Professional Form
import FormProfessional from './ProfessionalForm/FormProfessional';

class App extends Component {
  state = {
    step: 0,
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
  updatePostalCode = (childData) => {
    this.setState({ postalCode: childData })
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

  render() {
    const step = this.state.step;

    return (
      <div className="App">

        <nav className="navbar fixed-top navbar-dark bg-primary">
          <div className="container">
            <a className="navbar-brand" href="http://localhost:3000/">Get Your Quote - London</a>
            <div className="form-inline my-2 my-lg-0" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <form>
                  <button type="submit" className="btn btn-light" formAction="#professional">I'm a professional</button>
                </form>
              </ul>
            </div>
          </div>
        </nav>

        <div id="home">
          <div className="home-left">
            {/* Background Plumber */}
          </div>
          <div className="home-right">
            {step === 0 &&
              <div className="home-description">
                <h1 className="display-1">Get your quote</h1>
                <p className="lead">There are many times when DIY home projects can save money.
                Combining the internet and local home stores it's easy to find the right parts and expert tips.
                But do you know that hiring a professional worker can save you time, eliminate stress, and even save you more money?
                </p>
                <div className="get-started-btn">
                  <button type="button" className="btn btn-primary custom-btn" onClick={this.nextStep}>Get Started</button>
                </div>
              </div>
            }

            {/* POSTAL CODE FORM */}
            {step === 1 &&
              < Form01PostalCode
                step={this.state.step}
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                postalCode={this.state.postalCode}
                updatePostalCode={this.updatePostalCode}
              />
            }
            {/* PROFESSIONAL TYPE FORM */}
            {step === 2 && (
              < Form02ProType
                step={this.state.step}
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                professional={this.state.professional}
                updateProfessional={this.updateProfessional}
              />
            )}
            {/* SERVICE TYPE FORM */}
            {step === 3 && (
              < Form03JobType
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
              < Form04JobDetails
                step={this.state.step}
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                serviceDetail={this.state.serviceDetail}
                servicePriority={this.state.servicePriority}
                updateServiceDetail={this.updateServiceDetail}
                updateServicePriority={this.updateServicePriority}
              />
            )}
            {/* SERVICE PRIORITY FORM */}
            {step === 5 && (
              < Form05JobPriority
                step={this.state.step}
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                servicePriority={this.state.servicePriority}
                updateServicePriority={this.updateServicePriority}
              />
            )}
            {/* USER DETAILS FORM */}
            {step === 6 && (
              < Form06UserDetails
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
            {step === 7 && (
              < Form07ProSelection
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
            {/* SUCCESS */}
            {step === 8 && (
              < Form08Success />
            )}
          </div>
        </div>
        <div id="professional">
          < FormProfessional />
          {/* 
          <div className="professional-left">
            
          </div>

          <div className="professional-right">

          </div>

          <div className="footer">

          </div> 
          */}
        </div>
      </div>
    )
  }
}

export default App;
