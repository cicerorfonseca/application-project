import React, { Component } from 'react';

export class Form03JobType extends Component {

  //This function calls the callback props.updateProfessional using the value selected as argument
  updateServiceParent = (e) => {
    this.props.updateServiceType(e.target.value);
  }

  render() {
    const professional = this.props.professional;
    let listServices = '';

    switch (professional) {
      case 'Plumber':
        //Declare the services for this professional
        let plumberServiceList = ['Clogged Drains', 'Leaking Pipes', 'Diagnosis & Inspection', 'Electric Showers', 'Sprinkle System',
          'Kitchen Services', 'Sewer Repair', 'Upgrade Fixtures', 'Replace Shower Valves', 'Other'];

        //Run through the services array and output a radio button for each service
        listServices = plumberServiceList.map((service, index) =>
          <div className="custom-control custom-radio" key={index}>
            <input type="radio" id={'serviceRadio' + index} name="jobType" className="custom-control-input"
              checked={this.props.serviceType === service}
              value={service}
              onChange={this.updateServiceParent}
            />
            <label className="custom-control-label" htmlFor={'serviceRadio' + index}>{service}</label>
          </div>
        );
        break;

      case 'Electrician':
        //Declare the services for this professional
        let electricianServiceList = ['Internal Lighting', 'External Lighting', 'Sockets & Switches', 'Air Conditioning', 'House Rewire',
          'Switches & Sensors', 'Inspection', 'Installation', 'Other'];

        //Run through the services array and output a radio button for each service
        listServices = electricianServiceList.map((service, index) =>
          <div className="custom-control custom-radio" key={index}>
            <input type="radio" id={'serviceRadio' + index} name="jobType" className="custom-control-input"
              checked={this.props.serviceType === service}
              value={service}
              onChange={this.updateServiceParent}
            />
            <label className="custom-control-label" htmlFor={'serviceRadio' + index}>{service}</label>
          </div>
        );
        break;

      case 'Pest Control Specialist':
        //Declare the services for this professional
        let pestControlServiceList = ['Residential Pest Control', 'Wildlife Management', 'Bed Bug Management', 'Pest Prevention', 'Small Fly',
          'Large Fly', 'Auditing Services', 'Hygiene Services', 'Other'];

        //Run through the services array and output a radio button for each service
        listServices = pestControlServiceList.map((service, index) =>
          <div className="custom-control custom-radio" key={index}>
            <input type="radio" id={'serviceRadio' + index} name="jobType" className="custom-control-input"
              checked={this.props.serviceType === service}
              value={service}
              onChange={this.updateServiceParent}
            />
            <label className="custom-control-label" htmlFor={'serviceRadio' + index}>{service}</label>
          </div>
        );
        break;

      case 'Handyman':
        //Declare the services for this professional
        let handymanServiceList = ['Decking', 'Fencing & Gates', 'Flooring', 'Brick Paving', 'Internal Doors',
          'Internal Paiting', 'Gardn Maintenance', 'Shelving & Hangings', 'Other'];

        //Run through the services array and output a radio button for each service
        listServices = handymanServiceList.map((service, index) =>
          <div className="custom-control custom-radio" key={index}>
            <input type="radio" id={'serviceRadio' + index} name="jobType" className="custom-control-input"
              checked={this.props.serviceType === service}
              value={service}
              onChange={this.updateServiceParent}
            />
            <label className="custom-control-label" htmlFor={'serviceRadio' + index}>{service}</label>
          </div>
        );
        break;

      case 'HVAC Specialist':
        //Declare the services for this professional
        let hvacServiceList = ['Furnaces', 'Air Conditioners', 'Water Heaters', 'Water Purifiers', 'Boilers',
          'Thermostat', 'Other'];

        //Run through the services array and output a radio button for each service
        listServices = hvacServiceList.map((service, index) =>
          <div className="custom-control custom-radio" key={index}>
            <input type="radio" id={'serviceRadio' + index} name="jobType" className="custom-control-input"
              checked={this.props.serviceType === service}
              value={service}
              onChange={this.updateServiceParent}
            />
            <label className="custom-control-label" htmlFor={'serviceRadio' + index}>{service}</label>
          </div>
        );
        break;
      default:
        break;
    }
    return (
      <div>
        <div className="request-form">
          <h3 className="display-2">What type of job you need?</h3>
          <p className="lead">You can choose one option below or in case you need something different, just click on Other and you can give us more details about the job in the next step.</p>
          <p id="validation-msg"></p>
          <div className="job-type">
            {listServices}
          </div>
          <div className="buttons">
            <div className="leftBtn">
              <button type="button" className="btn btn-primary custom-btn" onClick={this.props.prevStep}>Previous</button>
            </div>
            <div className="rightBtn">
              <button type="button" className="btn btn-primary custom-btn" onClick={this.props.nextStep}>Next</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Form03JobType;
