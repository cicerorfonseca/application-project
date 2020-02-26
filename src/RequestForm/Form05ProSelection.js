import React, { Component } from 'react';
import Logo from './logo-plumber.jpg';

export class Form05ProSelection extends Component {
  state = {
    isLoaded: false
  }


  //Get professionals from server
  //componentDidMount is invoked immediately after a component is mounted.
  componentDidMount() {
    // fetch('http://localhost:5000/api/professionals')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        this.props.updateProfessionalsList(json);
        this.setState({ isLoaded: true })
      })
  }

  onClickProfessional = (e) => {
    console.log('Click!' + e.target.id);
    document.getElementById(e.target.id).className += '-clicked';
  }

  render() {
    var { professionalsList } = this.props;

    return (
      <div>
        <div className="requestForm">
          <h3>Select the pros you'd like to send the request</h3>
          <p>Here you can select the professionals to send your service request. Read their profile and reviews to help you choose the right service provider and these pros will contact you to discuss your job and availability.</p>
        </div>
        <div className="professionalSelection">
          <div className="card-deck">
            {professionalsList.map(item => (
              <div className="col-sm-6" key={item.id}>
                <div className="card pro-card">
                  <div className="card-body">
                    <div className="card-header">
                      <div className="title">
                        <input type="checkbox" className="custom-control-input" id="defaultChecked2" />
                        <h5 className="card-title">{item.name}</h5>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </div>
                      <div className="prof-picture" id={item.id}>
                        <img src={Logo} alt="Company Logo" id={item.id} />
                      </div>
                    </div>
                    <p className="card-text" id={item.id}>I am a plumber,and I install and repair pipes that supply water and gas to, as well as carry waste away from, homes and businesses. They also install plumbing fixtures such as bathtubs, sinks, and toilets.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Form05ProSelection;
