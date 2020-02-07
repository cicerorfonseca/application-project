import React, { Component } from 'react'

export class FormUserDetails extends Component {
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
          <form>
            <div className="form-row">
              <h3>Finally, your contact details</h3>
              <p>You are almost done, but the professional needs this information to get in touch. Only the local and relevant professionals you select in the next step will receive this information.</p>
              <div className="form-group col-md-6">
                <input type="text" className="form-control" id="inputEmail4" placeholder="First Name" value={this.props.firstName} onChange={this.updateFirstNameParent} />
              </div>
              <div className="form-group col-md-6">
                <input type="text" className="form-control" id="inputPassword4" placeholder="Last Name" value={this.props.lastName} onChange={this.updateLastNameParent} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-12">
                {/* TODO: Format phone number (xxx) xxx-xxxx */}
                <input type="text" className="form-control" id="inputCity" placeholder="Phone Number" value={this.props.phoneNumber} onChange={this.updatePhoneNumberParent} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-12">
                <input type="text" className="form-control" id="inputZip" placeholder="Email" value={this.props.emailAddress} onChange={this.updateEmailAddressParent} />
              </div>
            </div>

            {/* NOTE: ASK FOR ADDRESS??
          <div className="form-row">
            <div className="form-group col-md-8">
              <input type="text" className="form-control" id="inputCity" placeholder="Address" />
            </div>
            <div className="form-group col-md-4">
              <input type="text" className="form-control" id="inputZip" placeholder="Unit" />
            </div>
          </div> */}

            <div className="form-row">
              <div className="form-group col-md-4">
                <input type="text" className="form-control" id="inputZip" value={this.props.postalCode} onChange={this.updatePostalCodeParent} />
              </div>
              <div className="form-group col-md-4">
                <input type="text" className="form-control" id="inputZip" value="London" readOnly />
              </div>
              <div className="form-group col-md-4">
                <input type="text" className="form-control" id="inputZip" value="ON" readOnly />
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" />
                <label className="form-check-label" htmlFor="gridCheck">
                  Check me out
              </label>
              </div>
            </div>
            <div style={styleButtons}>
              <div className="leftBtn">
                <button type="button" className="btn btn-primary" onClick={this.props.prevStep}>Back</button>
              </div>
              <div className="rightBtn">
                <button type="submit" className="btn btn-primary">Submit Request</button>
              </div>
            </div>
          </form>
        </div>
      </div >
    )
  }
}

export default FormUserDetails;
