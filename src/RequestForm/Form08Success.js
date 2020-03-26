import React, { Component } from 'react';
import logoSuccess from '../img/success.png';

export class Form07Success extends Component {
  render() {
    return (
      <div className="request-form-success">
        <img src={logoSuccess} alt="Success" />
        <h3 className="display-2">Thanks for joining!</h3>
        <p className="lead">You may start receiving service requests as soon as possible.</p>
        <form>
          <button type="submit" className="btn btn-success" formAction="http://localhost:3000/">New Request</button>
        </form>
      </div>
    )
  }
}

export default Form07Success
