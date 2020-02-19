import React, { Component } from 'react';

import './Form02JobType.css';

export class Form02JobType extends Component {

  //This function calls the callback props.updateProfessional using the value selected as argument
  updateServiceParent = (e) => {
    this.props.updateServiceType(e.target.value);
  }

  render() {
    const professional = this.props.professional;
    let listServices = '';

    switch (professional) {
      case 'plumber':
        //Declare the services for this professional
        let plumberServiceList = ['Clogged Drains', 'Leaking Pipes', 'Diagnosis & Inspection', 'Electric Showers', 'Sprinkle System',
          'Kitchen Services', 'Sewer Repair', 'Upgrade Fixtures', 'Replace Shower Valves', 'Other'];

        //Run through the services array and output a radio button for each service
        listServices = plumberServiceList.map((service, index) =>
          <div className="custom-control custom-radio" key={service.id}>
            <input type="radio" id={'serviceRadio' + index} name="jobType" className="custom-control-input"
              checked={this.props.serviceType === service}
              value={service}
              onChange={this.updateServiceParent} />
            <label className="custom-control-label" htmlFor={'serviceRadio' + index}>{service}</label>
          </div>
        );
        break;

      case 'electrician':

        break;
      default:
        break;
    }
    return (
      < div >
        <div className="requestForm">
          <h3>What type of job you need?</h3>
          <p>You can choose one option below or in case you need something different, just click on Other and you can give us more details about the job in the next step.</p>
          <div className="jobType">
            <div className="leftCol">
              {listServices}
            </div>
            <div className="rightCol">

            </div>
          </div>
          <br />
          <div className="buttons">
            <div className="leftBtn">
              <button type="button" className="btn btn-primary custom-btn" onClick={this.props.prevStep}>Previous</button>
            </div>
            <div className="rightBtn">
              <button type="button" className="btn btn-primary custom-btn" onClick={this.props.nextStep}>Next</button>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default Form02JobType;
