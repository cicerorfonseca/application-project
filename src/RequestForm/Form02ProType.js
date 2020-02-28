import React, { Component } from 'react'

export class Form02ProType extends Component {

  //Update app.js state
  updateProfessionalParent = (e) => {
    this.props.updateProfessional(e.target.value);
  }

  render() {
    let professionals = ['Plumber', 'Electrician', 'Pest Control Specialist', 'Handyman', 'HVAC Specialist'];

    //Run through the professionals array and insert a new <option> to the professionals list output
    let professionalsList = professionals.map((professional, index) =>
      <option value={professional} key={index}>{professional}</option>
    );

    return (
      <div className="requestForm">
        <div>
          <h3 className="display-2">What type of professional are you looking for?</h3>
          <p className="lead">Select the professional that fits your needs, a plumber, an electrician or a magician :) so we can recommend you only the best!</p>
          <p id="validation-msg"></p>
          <select className="form-control" id="selectProfessional" value={this.props.professional} onChange={this.updateProfessionalParent}>
            <option hidden>Pick the professional</option>

            {/* Increments the list according to the professionals array */}
            {professionalsList}
          </select>
        </div>

        <div className="buttons">
          <div className="leftBtn">

            {/* TODO: Validate the field, it must be selected before the next step. */}

            <button type="button" className="btn btn-primary custom-btn" onClick={this.props.prevStep}>Previous</button>
          </div>
          <div className="rightBtn">
            <button type="button" className="btn btn-primary custom-btn" onClick={this.props.nextStep}>Next</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Form02ProType;