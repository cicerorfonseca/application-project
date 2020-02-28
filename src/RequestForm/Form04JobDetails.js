import React, { Component } from 'react'

export class Form04JobDetails extends Component {
  //This function invokes the callback props.updateServiceDetail using the value selected as argument
  updateServiceDetailsParent = (e) => {
    this.props.updateServiceDetail(e.target.value);
  }

  render() {
    return (
      <div className="request-form">
        <h3 className="display-2">Give us some details about the job</h3>
        <p className="lead">In order to give you a proper quote, the professional needs as many details as possible. Describe the job you want including detail of any specifics.</p>
        <p id="validation-msg"></p>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={this.props.serviceDetail} onChange={this.updateServiceDetailsParent}></textarea>

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

export default Form04JobDetails;
