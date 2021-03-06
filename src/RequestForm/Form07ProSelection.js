import React, { Component } from 'react';
import Logo from './logo-plumber.jpg';

export class Form06ProSelection extends Component {
  state = {
    loading: true
  }

  //Get professionals from server
  //componentDidMount is invoked immediately after a component is mounted.
  componentDidMount() {
    var URL = '';

    if (this.props.professional === '1') {
      URL = 'http://localhost:5000/api/professionals/plumber';
    } else if (this.props.professional === '2') {
      URL = 'http://localhost:5000/api/professionals/electrician';
    } else if (this.props.professional === '3') {
      URL = 'http://localhost:5000/api/professionals/pestcontrol';
    } else if (this.props.professional === '4') {
      URL = 'http://localhost:5000/api/professionals/handyman';
    } else if (this.props.professional === '5') {
      URL = 'http://localhost:5000/api/professionals/hvac';
    }

    fetch(URL)
      .then(response => response.json())
      .then(json => {
        this.props.updateProfessionalsList(json);
        this.setState({ isLoaded: false });
      })
  }

  updateSelectedProfessionalsParent = (e) => {
    this.props.updateSelectedProfessionals(e.target.value);
  }

  postRequest = (obj) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    console.log('Posting request to API...');
    fetch('http://localhost:5000/api/services', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(obj),
      redirect: 'follow'
    })
      .then(response => response.text())
      .then(result => {
        console.log(result);
        this.props.nextStep();
      })
      .catch(error => console.log('error', error));
  }

  submitRequest = () => {
    let date = new Date();
    let currentDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

    console.log(currentDate);

    this.postRequest({
      postalCode: this.props.postalCode,
      professionalCategory: this.props.professional,
      serviceType: this.props.serviceType,
      serviceDetail: this.props.serviceDetail,
      servicePriority: this.props.servicePriority,
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      phoneNumber: this.props.phoneNumber,
      emailAddress: this.props.emailAddress,
      date: currentDate,
      professionals: this.props.selectedProfessionals
    })
  }

  render() {
    var { professionalsList } = this.props;

    return (
      <div>
        <div className="request-form-sel-professional">
          <h3 className="display-2">Select the pros you'd like to send the request</h3>
          <p className="lead">Here you can select the professionals to send your service request. Read their profile and reviews to help you choose the right service provider and these pros will contact you to discuss your job and availability.</p>
          <p id="validation-msg"></p>
          <div className="card-deck">
            {professionalsList.map(pro => (
              <div className="col-sm-6" key={pro.id}>
                <div className="card pro-card">
                  <div className="card-body">
                    <div className="card-header">
                      <div className="checkbox-container">
                        <label className="checkbox-label">
                          <input type="checkbox" value={pro.id} onChange={this.updateSelectedProfessionalsParent} />
                          <span className="checkbox-custom rectangular"></span>
                        </label>
                      </div>
                      <div className="title">
                        <h5 className="card-title">{pro.fullName}</h5>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </div>
                      <div className="prof-picture" id={pro.id}>
                        <img src={pro.logo} alt="Company Logo" id={pro.id} />
                      </div>
                    </div>
                    <p className="card-text" id={pro.id}>{pro.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="buttons">
            <div className="leftBtn">

              {/* TODO: Validate the field, it must be selected before the next step. */}

              <button type="button" className="btn btn-primary custom-btn" onClick={this.props.prevStep}>Previous</button>
            </div>
            <div className="rightBtn">
              <button type="submit" className="btn btn-primary" onClick={this.submitRequest}>Submit Request</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Form06ProSelection;
