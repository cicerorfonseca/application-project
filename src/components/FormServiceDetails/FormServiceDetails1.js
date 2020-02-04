import React, { Component } from 'react'

export class FormServiceDetails1 extends Component {

  //This function calls the callback props.updateProfessional using the value selected as argument
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
      <div>
        <div style={style}>
          <label htmlFor="selectProfessional">What type of professional are you looking for?</label>
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
            <button type="button" className="btn btn-primary" onClick={this.props.prevStep}>Back</button>
          </div>
          <div className="rightBtn">
            <button type="button" className="btn btn-primary" onClick={this.props.nextStep}>Next</button>
          </div>
        </div>
      </div>

    )
  }
}

export default FormServiceDetails1;