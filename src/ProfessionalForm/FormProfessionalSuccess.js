import React, { Component } from 'react';
import logoSuccess from '../img/success.png';

export class FormProfessionalSuccess extends Component {
  render() {
    return (
      <div className="professional-form-success">
        <img src={logoSuccess} alt="Success" />
        <h3 className="display-2">Thanks for joining!</h3>
        <p className="lead">You may start receiving service requests as soon as possible.</p>
        <form>
          <button type="submit" className="btn btn-success" formAction="http://localhost:3000/">Back to Home</button>
        </form>
      </div>
    )
  }
}

export default FormProfessionalSuccess
