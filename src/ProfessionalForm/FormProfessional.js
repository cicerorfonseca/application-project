import React, { Component } from 'react';

export class FormProfessional extends Component {
  state = {
    proFirstName: '',
    proLastName: '',
    proCompanyName: '',
    proCategory: '',
    proPhoneNumber: '',
    proSelfEmployed: '',
    proTypeOfContact: '',
    proEmail: '',
    proWebsite: '',
    proDescription: '',
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
    fetch('http://localhost:5000/api/professionals/signup', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(obj),
      redirect: 'follow'
    })
      .then(response => response.text())
      .then(result => {
        console.log(JSON.parse(result));
        if (JSON.parse(result).message === "Professional exists already, please login instead." || JSON.parse(result).message === "Invalid inputs passed, please check your data.") {
          console.log("Fail...");
        } else {
          this.props.updateProSignUp(true);
        }
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
      webSite: this.state.proWebsite,
      description: this.state.proDescription,
      password: this.state.proPassword,
      logo: 'https://png2.cleanpng.com/sh/b55665cf76aae102ab6ccb0f2ee84415/L0KzQYm3VsA2N5x0f5H0aYP2gLBuTgBtfZ5nfeQ2bHBqf37qjB50fKN6eAZyb36wh7F5iBVzNaFxjd9rZYKwRbO4Vsc4OZY7ftNtN0exQ4a3UcQ3Pmk2TaQDMUm7SYW5VMU4PF91htk=/kisspng-plumber-logo-construction-worker-plumber-5b16771e6fad77.3501466815281989424574.png'
    })
  }

  validateProDetails = () => {
    let isValid = false;
    if (this.state.proFirstName === '') {
      document.getElementById('proFirstName').classList.add('invalidInput');
      isValid = false;
    } else {
      document.getElementById('proFirstName').classList.remove('invalidInput');
      isValid = true;
    }
    if (this.state.proLastName === '') {
      document.getElementById('proLastName').classList.add('invalidInput');
      isValid = false;
    } else {
      document.getElementById('proLastName').classList.remove('invalidInput');
      isValid = true;
    }
    if (this.state.proCompanyName === '') {
      document.getElementById('proCompanyName').classList.add('invalidInput');
      isValid = false;
    } else {
      document.getElementById('proCompanyName').classList.remove('invalidInput');
      isValid = true;
    }
    if (this.state.proCategory === '') {
      document.getElementById('selectProfessional').classList.add('invalidInput');
      isValid = false;
    } else {
      document.getElementById('selectProfessional').classList.remove('invalidInput');
      isValid = true;
    }
    if (this.state.proPhoneNumber === '') {
      document.getElementById('proPhoneNumber').classList.add('invalidInput');
      isValid = false;
    } else {
      document.getElementById('proPhoneNumber').classList.remove('invalidInput');
      isValid = true;
    }
    if (this.state.proSelfEmployed === '') {
      document.getElementById('selectSelfEmployed').classList.add('invalidInput');
      isValid = false;
    } else {
      document.getElementById('selectSelfEmployed').classList.remove('invalidInput');
      isValid = true;
    }
    if (this.state.proTypeOfContact === '') {
      document.getElementById('selectTypeOfContact').classList.add('invalidInput');
      isValid = false;
    } else {
      document.getElementById('selectTypeOfContact').classList.remove('invalidInput');
      isValid = true;
    }
    if (this.state.proEmail === '') {
      document.getElementById('proEmail').classList.add('invalidInput');
      isValid = false;
    } else {
      document.getElementById('proEmail').classList.remove('invalidInput');
      isValid = true;
    }
    if (this.state.proWebsite === '') {
      document.getElementById('proWebsite').classList.add('invalidInput');
      isValid = false;
    } else {
      document.getElementById('proWebsite').classList.remove('invalidInput');
      isValid = true;
    }
    if (this.state.proDescription === '') {
      document.getElementById('proDescription').classList.add('invalidInput');
      isValid = false;
    } else {
      document.getElementById('proDescription').classList.remove('invalidInput');
      isValid = true;
    }
    if (isValid === false) {
      document.getElementById('validation-msg').innerHTML = 'Please fill in all of the fields';
    } else {
      document.getElementById('validation-msg').innerHTML = '';
      this.submitRequest();
    }
  }

  render() {
    let professionals = ['plumber', 'plectrician', 'pest Control Specialist', 'handyman', 'HVAC Specialist'];

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
              <input type="text" className="form-control" id="proCompanyName" placeholder="Company Name" value={this.state.proCompanyName} onChange={this.handleChange('proCompanyName')} />
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
            <div className="form-group col-md-4">
              <input type="text" className="form-control" id="proPhoneNumber" placeholder="Phone Number" value={this.state.proPhoneNumber} onChange={this.handleChange('proPhoneNumber')} />
            </div>

            <div className="form-group col-md-4">
              <select className="form-control" id="selectSelfEmployed" value={this.state.proSelfEmployed} onChange={this.handleChange('proSelfEmployed')}>
                <option hidden>Self Employed</option>
                <option key="1" value="true">Yes</option>
                <option key="2" value="false">No</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <select className="form-control" id="selectTypeOfContact" value={this.state.TypeOfContact} onChange={this.handleChange('proTypeOfContact')}>
                <option hidden>Type of Contact</option>
                <option key="1" value="true">Phone (SMS)</option>
                <option key="2" value="false">Email</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="text" className="form-control" id="proEmail" placeholder="Email" value={this.state.proEmail} onChange={this.handleChange('proEmail')} />
            </div>
            <div className="form-group col-md-6">
              <input type="text" className="form-control" id="proWebsite" autoComplete="website" placeholder="Website" value={this.state.proWebsite} onChange={this.handleChange('proWebsite')} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-12">
              <textarea className="form-control" id="proDescription" placeholder="Describe your business..." rows="3" value={this.state.proDescription} onChange={this.handleChange('proDescription')}></textarea>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6 last-row">
              <input type="password" className="form-control" id="password" placeholder="Password" autoComplete="new-password" value={this.state.proPassword} onChange={this.handleChange('proPassword')} />
            </div>
            <div className="form-group col-md-6 last-row">
              <input type="password" className="form-control" id="passwordConfirm" placeholder="Confirm your Password" autoComplete="new-password" />
            </div>
          </div>

          <div className="professional-buttons">
            <button type="button" className="btn btn-primary custom-btn" onClick={this.validateProDetails}>Sign me Up!</button>
          </div>
        </form>
      </div>
    )
  }
}

export default FormProfessional;
