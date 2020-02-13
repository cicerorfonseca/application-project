import React, { Component } from 'react'

export class FormServiceDetails1 extends Component {

  //Update app.js state
  updateProfessionalParent = (e) => {
    this.props.updateProfessional(e.target.value);
  }

  render() {
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

    return (
      <div className="requestForm">
        <div style={style}>
          <h3>What type of professional are you looking for?</h3>
          <p>Select the professional that fits your needs, a plumber, an electrician or a magician :) so we can recommend you only the best!</p>
          <select className="form-control" id="selectProfessional" value={this.props.professional} onChange={this.updateProfessionalParent}>
            <option hidden>Pick the professional</option>
            <option value="plumber">Plumber</option>
            <option value="electrician">Electrician</option>
            <option value="pestControl">Pest Control Specialist</option>
            <option value="handyman">Handyman</option>
            <option value="hvac">HVAC Specialist</option>
          </select>
          <br />
        </div >
        <div style={styleButtons}>
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

export default FormServiceDetails1;