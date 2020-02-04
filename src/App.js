import React, { Component } from 'react';

import './App.css';

import FormServiceDetails1 from './components/FormServiceDetails/FormServiceDetails1';
import FormServiceDetails2 from './components/FormServiceDetails/FormServiceDetails2';
import FormServiceDetails3 from './components/FormServiceDetails/FormServiceDetails3';

class App extends Component {
  state = {
    step: 1,
    postalCode: '',
    professional: '',
    serviceType: '',
    serviceDetail: '',
    serviceStart: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: ''
  }

  //Proceed to the next step
  nextStep = () => {
    const step = this.state.step;
    this.setState({
      step: step + 1
    })
  }

  //Back to the previous step
  prevStep = () => {
    const step = this.state.step;
    this.setState({
      step: step - 1
    })
  }

  //Update Postal Code according to the input
  updatePostalCode = () => {
    let postalCode = document.getElementById('postalCode').value;
    this.setState({ postalCode: postalCode })
    this.nextStep()
  }

  //Update Professional according to the child form data (FormServiceDetails1)
  updateProfessional = (childData) => {
    this.setState({ professional: childData })
  }

  //Update Professional according to the child form data (FormServiceDetails2)
  updateServiceType = (childData) => {
    this.setState({ serviceType: childData })
  }

  updateServiceDetail = (childData) => {
    this.setState({ serviceDetail: childData })
    this.nextStep()
  }

  render() {
    const step = this.state.step;

    return (
      <div>
        <div className="App">
          <div className="jumbotron">
            <div className="container">

              <h1 className="display-4">Get your quote</h1>
              <p className="lead">Get FREE quotes for any job around the home.</p>
              <hr className="my-4" />

              <form>
                {/* POSTAL CODE FORM */}
                {step === 1 &&
                  <div><input type="text" className="form-control form-control-lg" id="postalCode" placeholder="Postal Code" />
                    <br></br>
                    <button type="button" className="btn btn-primary" onClick={this.updatePostalCode}>Get Started</button>
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
                    updateServiceDetail={this.updateServiceDetail}
                  />
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
