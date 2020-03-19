import React, { Component } from 'react'

export class Form04JobDetails extends Component {
  //This function invokes the callback props.updateServiceDetail using the value selected as argument
  updateServiceDetailsParent = (e) => {
    this.props.updateServiceDetail(e.target.value);
  }

  validateServiceDetail = () => {
    if (this.props.serviceDetail === '') {
      document.getElementById('validation-msg').innerHTML = 'Please give us some details about the job';
      document.getElementById('serviceDetails').classList.add('invalidInput');
    } else {
      document.getElementById('serviceDetails').classList.remove('invalidInput');
      this.props.nextStep();
    }
  }

  render() {
    return (
      <div className="request-form">
        <h3 className="display-2">Give us some details about the job</h3>
        <p className="lead">In order to give you a proper quote, the professional needs as many details as possible. Describe the job you want including detail of any specifics.</p>
        <p id="validation-msg"></p>
        <textarea className="form-control" id="serviceDetails" rows="5" value={this.props.serviceDetail} onChange={this.updateServiceDetailsParent}></textarea>

        <div className="buttons">
          <div className="leftBtn">
            <button type="button" className="btn btn-primary custom-btn" onClick={this.props.prevStep}>Previous</button>
          </div>
          <div className="rightBtn">
            <button type="button" className="btn btn-primary custom-btn" onClick={this.validateServiceDetail}>Next</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Form04JobDetails;
