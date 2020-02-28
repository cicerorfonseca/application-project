import React, { Component } from 'react'

export class Form05JobPriority extends Component {
  //This functions invokes que updateService priority from App.js
  updateServicePriorityParent = (e) => {
    this.props.updateServicePriority(e.target.value);
  }

  render() {
    return (
      <div className="request-form">
        <h3 className="display-2">When would you like the work to start?</h3>
        <p className="lead">The professional needs to know if the service is urgent. Please inform when you plan the job done. If it is not urgent then just select "flexible".</p>
        <p id="validation-msg"></p>
        <select className="form-control" id="selectPriority" value={this.props.servicePriority} onChange={this.updateServicePriorityParent}>
          <option hidden>Select the priority</option>
          <option value="ASAP">ASAP</option>
          <option value="in 48h">In 48h</option>
          <option value="in a week">In a week</option>
          <option value="flexible">Flexible</option>
        </select>
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

export default Form05JobPriority
