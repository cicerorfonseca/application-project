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
        let plumberServiceList = ['Clogged Drains', 'Leaking Pipes', 'Diagnosis & Inspection', ' Electric Showers', 'Sprinkle System',
          'Kitchen Services', 'Sewer Repair', 'Upgrade Fixtures', 'Replace Shower Valves', 'Other'];

        //TODO: Generate the job list html using the array above instead of hard coded

        jobType =
          <div style={style}>
            <h3>What type of job you need?</h3>
            <p>You can choose one option below or in case you need something different, just click on Other and you can give us more details about the job in the next step.</p>
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
              </div>
              <div className="rightCol">

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
