import React, { Component } from 'react'

export class FormServiceDetails3 extends Component {
  //This function invokes the callback props.updateServiceDetail using the value selected as argument
  updateServiceDetailsParent = (e) => {
    this.props.updateServiceDetail(e.target.value);
  }

  updateServicePriorityParent = (e) => {
    this.props.updateServicePriority(e.target.value);
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
          <div className="form-group">
            <h3>Give us some details about the job:</h3>
            <p>To give you the proper quote, the professional needs as many details as possible. Describe the job you want including detail of any specifics.</p>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" onChange={this.updateServiceDetailsParent}></textarea>
          </div>
          <div className="priority">
            <br></br>
            <h3>When would you like the work to start?</h3>
            <p>The professional needs to know if the service is urgent. Please inform when you plan the job done. If it is not urgent then just select "flexible".</p>
            <div>
              <select className="form-control" id="selectPriority" value={this.props.professional} onChange={this.updateServicePriorityParent}>
                <option hidden>Select the priority</option>
                <option value="ASAP">ASAP</option>
                <option value="in 48h">In 48h</option>
                <option value="in a week">In a week</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
          </div>
        </div>
        <br />
        <div style={styleButtons}>
          <div className="leftBtn">
            <button type="button" className="btn btn-primary">Back</button>
          </div>
          <div className="rightBtn">
            <button type="button" className="btn btn-primary" onClick={this.props.nextStep}>Next</button>
          </div>
        </div>
      </div>
    )
  }
}

export default FormServiceDetails3;
