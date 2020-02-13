import React, { Component } from 'react';
import Logo from './logo-plumber.jpg';

export class Form05ProSelection extends Component {
  state = {
    isLoaded: false
  }


  //Get professionals from server
  //componentDidMount is invoked immediately after a component is mounted.
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.props.updateProfessionalsList(json),
        this.setState({ isLoaded: true }))
  }

  render() {
    var { professionalsList } = this.props;
    console.log(professionalsList);

    return (
      <div>
        <h3>Finally, your contact details</h3>
        <p>You are almost done, but the professional needs this information to get in touch. Only the local and relevant professionals you select in the next step will receive this information.</p>
        <div className="card-deck">
          {professionalsList.map(item => (
            <div className="col-sm-4" key={item.id}>
              <div className="card pro-card">
                <div className="card-body">
                  <div className="card-header">
                    <div className="title">
                      <h5 className="card-title">{item.username}</h5>
                    </div>
                    <div className="prof-picture">
                      <img src={Logo} alt="Company Logo" />
                    </div>
                  </div>

                  <p className="card-text">{item.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Form05ProSelection;
