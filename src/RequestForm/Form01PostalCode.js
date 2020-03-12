import React, { Component } from 'react'

export class Form01PostalCode extends Component {
  //Update app.js state
  updatePostalCodeParent = (e) => {
    this.props.updatePostalCode(e.target.value);
  }

  //VALIDATE POSTAL CODE
  //This function gets the postal code value, 
  //validates if it is a valid postal code from London, ON, and returns a flag value.
  validatePostalCode = (postalCode) => {
    var isValid = false;
    var postalCodes = ["N6E", "N6P", "N6N", "N6M", "N6L", "N6K",
      "N6J", "N6G", "N5V", "N5Z", "N5Y", "N5X", "N6B", "N6A", "N6C", "N6H", "N6W"];

    for (var i = 0; i < postalCodes.length; i++) {
      if (postalCode.substring(0, 3) === postalCodes[i]) {
        isValid = true;
        this.props.nextStep();
      }
    }
    if (isValid === false) {
      document.getElementById('validation-msg').innerHTML = 'Please enter a London Postal Code';
    }
  }

  render() {
    return (
      <div className="form-postal-code">
        <h3 className="display-2">Where in London do you live?</h3>
        <p className="lead">We are currently only receiving requests from residents of London. Please check back soon to see when support will be added for you area.</p>
        <p id="validation-msg"></p>
        <input type="text" className="form-control form-control-lg" id="postalCode" placeholder="Postal Code" value={this.props.postalCode} onChange={this.updatePostalCodeParent} />
        <div className="buttons">
          <div className="leftBtn">
            <button type="button" className="btn btn-primary custom-btn" onClick={this.props.prevStep}>Previous</button>
          </div>
          <div className="rightBtn">
            <button type="button" className="btn btn-primary custom-btn" onClick={() => this.validatePostalCode(this.props.postalCode)}>Next</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Form01PostalCode
