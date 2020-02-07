import React, { Component } from 'react';

import './FormServiceDetails2.css';

export class FormServiceDetails2 extends Component {

  //This function calls the callback props.updateProfessional using the value selected as argument
  updateServiceParent = (e) => {
    this.props.updateServiceType(e.target.value);
  }

  render() {
    const professional = this.props.professional;
    let jobType = '';

    // STYLE //
    const style = {
      margin: "auto",
      textAlign: "left"
    };

    const styleButtons = {
      display: "flex",
      justifyContent: "space-between"
    }
    // END OF STYLE //

    switch (professional) {
      case 'plumber':
        jobType =
          <div style={style}>
            <h3>Give us some details about the job:</h3>
            <p>To give you the proper quote, the professional needs as many details as possible. Describe the job you want including detail of any specifics.</p>
            <div className="jobType">
              <div className="leftCol">
                <div className="custom-control custom-radio">
                  <input type="radio" id="customRadio1" name="jobType" className="custom-control-input"
                    checked={this.props.serviceType === 'Clogged Drains'}
                    value="Clogged Drains"
                    onChange={this.updateServiceParent} />
                  <label className="custom-control-label" htmlFor="customRadio1">Clogged Drains</label>
                </div>
                <div className="custom-control custom-radio">
                  <input type="radio" id="customRadio2" name="jobType" className="custom-control-input"
                    checked={this.props.serviceType === 'Leaking Pipes'}
                    value="Leaking Pipes"
                    onChange={this.updateServiceParent} />
                  <label className="custom-control-label" htmlFor="customRadio2">Leaking Pipes</label>
                </div>
                <div className="custom-control custom-radio">
                  <input type="radio" id="customRadio3" name="jobType" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="customRadio3">Diagnosis & Inspection</label>
                </div>
                <div className="custom-control custom-radio">
                  <input type="radio" id="customRadio4" name="jobType" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="customRadio4">Electric Showers</label>
                </div>
                <div className="custom-control custom-radio">
                  <input type="radio" id="customRadio5" name="jobType" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="customRadio5">Sprinkler System</label>
                </div>
              </div>
              <div className="rightCol">
                <div className="custom-control custom-radio">
                  <input type="radio" id="customRadio6" name="jobType" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="customRadio6">Kitchen Services and Installation</label>
                </div>
                <div className="custom-control custom-radio">
                  <input type="radio" id="customRadio7" name="jobType" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="customRadio7">Sewer Repair</label>
                </div>
                <div className="custom-control custom-radio">
                  <input type="radio" id="customRadio8" name="jobType" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="customRadio8">Upgrade plumbing fixtures</label>
                </div>
                <div className="custom-control custom-radio">
                  <input type="radio" id="customRadio9" name="jobType" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="customRadio9">Replace shower valves</label>
                </div>
                <div className="custom-control custom-radio">
                  <input type="radio" id="customRadio10" name="jobType" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="customRadio10">Other</label>
                </div>
              </div>
            </div>
            <br />
            <div style={styleButtons}>
              <div className="leftBtn">
                <button type="button" className="btn btn-primary" onClick={this.props.prevStep}>Back</button>
              </div>
              <div className="rightBtn">
                <button type="button" className="btn btn-primary" onClick={this.props.nextStep}>Next</button>
              </div>
            </div>
          </div>
        break;
      case 'electrician':

        break;
      default:
        break;
    }
    return (
      < div >
        {jobType}
      </div >
    )
  }
}

export default FormServiceDetails2;
