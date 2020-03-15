import React, { Component } from 'react'

export class Form05UserDetails extends Component {
  //Update state from App.js with data from the form
  updateFirstNameParent = (e) => {
    this.props.updateFirstName(e.target.value);
  }

  updateLastNameParent = (e) => {
    this.props.updateLastName(e.target.value);
  }

  updatePhoneNumberParent = (e) => {
    this.props.updatePhoneNumber(e.target.value);
  }

  updateEmailAddressParent = (e) => {
    this.props.updateEmailAddress(e.target.value);
  }

  updatePostalCodeParent = (e) => {
    this.props.updatePostalCode(e.target.value);
  }


  render() {
    return (
      <div className="request-form">
        <h3 className="display-2">Finally, your contact details</h3>
        <p className="lead">You are almost done, but the professional needs this information to get in touch. Only the local and relevant professionals you select in the next step will receive this information.</p>
        <p id="validation-msg"></p>
        <div className="form-row">
          <div className="form-group col-md-6">
            <input type="text" className="form-control" id="firstName" placeholder="First Name" value={this.props.firstName} onChange={this.updateFirstNameParent} />
          </div>
          <div className="form-group col-md-6">
            <input type="text" className="form-control" id="lastName" placeholder="Last Name" value={this.props.lastName} onChange={this.updateLastNameParent} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-12">
            <input type="text" className="form-control" id="phoneNumber" placeholder="Phone Number" value={this.props.phoneNumber} onChange={this.updatePhoneNumberParent} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <input type="text" className="form-control" id="email" placeholder="Email" value={this.props.emailAddress} onChange={this.updateEmailAddressParent} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-4 last-row">
            <input type="text" className="form-control" id="postalCode" value={this.props.postalCode} onChange={this.updatePostalCodeParent} />
          </div>
          <div className="form-group col-md-4 last-row">
            <input type="text" className="form-control" id="city" value="London" readOnly />
          </div>
          <div className="form-group col-md-4 last-row">
            <input type="text" className="form-control" id="province" value="ON" readOnly />
          </div>
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
    )
  }
}

export default Form05UserDetails;
