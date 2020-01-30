import React, { Component } from 'react'

export class FormUserPostalCode extends Component {
  continue = e => {
    this.props.nextStep();
  }

  render() {
    const postalCode = this.props.postalCode;
    console.log(this.props);
    return (
      <div className="input-group input-group-lg">
        <input type="text" className="form-control" id="postalCode" placeholder="Postal Code" />
        <div class="input-group-append">
          <button type="button" class="btn btn-primary" onClick={this.continue}>Get Started</button>
        </div>

        {/* TODO: Implement Postal Code validation. 
                    Must be a valid London, ON postal code.*/}

      </div>
    )
  }
}

export default FormUserPostalCode;
