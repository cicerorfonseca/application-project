import React, { Component } from 'react'

export class FormUserPostalCode extends Component {
  continue = e => {
    this.props.nextStep();
  }

  render() {
    const postalCode = this.props.postalCode;
    console.log(this.props);
    return (
      <div className="input-group mb-3 input-group-lg">
        <input type="text" className="form-control" placeholder="Postal Code" value={postalCode} onChange={this.props.handleChange('postalCode')} />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">Get Started</button>

          {/* TODO: Implement Postal Code validation. 
                    Must be a valid London, ON postal code. */}

        </div>
      </div>
    )
  }
}

export default FormUserPostalCode;
