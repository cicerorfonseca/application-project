import React, { Component } from 'react';
import FormProfessionalSuccess from './FormProfessionalSuccess';
import axios from 'axios';

export class FormProfessional extends Component {
  state = {
    proFirstName: '',
    proLastName: '',
    proCompanyName: '',
    proCategory: '',
    proPhoneNumber: '',
    proSelfEmployed: '',
    proEmail: '',
    proWebsite: '',
    proDescription: '',
    proLogo: 'http://devriescurbing.com/img/plumber.png',
    proPassword: ''
  }

  //Handle fields change (all the fields)
  handleChange = input => e => {
    this.setState({ [input]: e.target.value })
  }

  postRequest = (obj) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    console.log('Posting request to API...');
    console.log(obj);
    fetch('http://localhost:5000/api/professionals/signup', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(obj),
      redirect: 'follow'
    })
      .then(response => response.text())
      .then(result => {
        console.log(result);
        this.props.updateProSignUp(true);
      })
      .catch(error => console.log('error', error));
  }

  submitRequest = () => {
    this.postRequest({
      fullName: this.state.proFirstName + ' ' + this.state.proLastName,
      company: this.state.proCompanyName,
      category: this.state.proCategory,
      phone: this.state.proPhoneNumber,
      selfEmployed: this.state.proSelfEmployed,
      email: this.state.proEmail,
      website: this.state.proWebsite,
      description: this.state.proDescription,
      password: this.state.proPassword,
      logo: this.state.proLogo
    })
  }

  render() {
    let professionals = ['Plumber', 'Electrician', 'Pest Control Specialist', 'Handyman', 'HVAC Specialist'];

    //Run through the professionals array and insert a new <option> to the professionals list output
    let professionalsList = professionals.map((professional, index) =>
      <option value={professional} key={index}>{professional}</option>
    );

    return (
      <div className="professional-form">
        <h3 className="display-2">Looking for more customers?</h3>
        <p className="lead">Create your free profile so we can send you service requests from homeowners looking to hire a professional like you. </p>
        <p id="validation-msg"></p>
        <form autoComplete="off">
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="text" className="form-control" id="proFirstName" placeholder="First Name" value={this.state.profirstName} onChange={this.handleChange('proFirstName')} />
            </div>
            <div className="form-group col-md-6">
              <input type="text" className="form-control" id="proLastName" placeholder="Last Name" value={this.state.proLastName} onChange={this.handleChange('proLastName')} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="text" className="form-control" id="companyName" placeholder="Company Name" value={this.state.proCompanyName} onChange={this.handleChange('proCompanyName')} />
            </div>
            <div className="form-group col-md-6">
              <select className="form-control" id="selectProfessional" value={this.state.proCategory} onChange={this.handleChange('proCategory')}>
                <option hidden>Category</option>

                {/* Increments the list according to the professionals array */}
                {professionalsList}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="text" className="form-control" id="roPhoneNumber" placeholder="Phone Number" value={this.state.proPhoneNumber} onChange={this.handleChange('proPhoneNumber')} />
            </div>

            <div className="form-group col-md-6">
              <select className="form-control" id="selectSelfEmployed" value={this.state.proSelfEmployed} onChange={this.handleChange('proSelfEmployed')}>
                <option hidden>Self Employed</option>
                <option key="1" value="true">Yes</option>
                <option key="2" value="false">No</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="text" className="form-control" id="proEmail" placeholder="Email" value={this.state.proEmail} onChange={this.handleChange('proEmail')} />
            </div>
            <div className="form-group col-md-6">
              <input type="text" className="form-control" id="website" autoComplete="website" placeholder="Website" value={this.state.proWebsite} onChange={this.handleChange('proWebsite')} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-12">
              <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Describe your business..." rows="3" onChange={this.handleChange('proDescription')}></textarea>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12 input-row">
              <div className="input-group mb-3">
                <div className="custom-file">
                  <input type="file" className="custom-file-input" id="inputGroupFile02" />
                  <label className="custom-file-label" htmlFor="inputGroupFile02">Choose file</label>
                </div>
                <div className="input-group-append">
                  <span className="input-group-text" id="">Upload</span>
                </div>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6 last-row">
              <input type="password" className="form-control" id="password" placeholder="Password" autoComplete="new-password" onChange={this.handleChange('proPassword')} />
            </div>
            <div className="form-group col-md-6 last-row">
              <input type="password" className="form-control" id="passwordConfirm" placeholder="Confirm your Password" autoComplete="new-password" />
            </div>
          </div>

          <div className="professional-buttons">
            <button type="button" className="btn btn-primary custom-btn" onClick={this.submitRequest}>Sign me Up!</button>
          </div>
        </form>
      </div>
    )
  }
}

export default FormProfessional;
