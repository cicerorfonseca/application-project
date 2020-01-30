import React from 'react';
import './App.css';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      <div className="jumbotron">
        <div className="container">



          <h1 className="display-4">Get your quote</h1>
          <p className="lead">Get FREE quotes for any job around the home.</p>
          <hr className="my-4" />
          <UserForm />

          {/* STEP CARDS */}
          <div className="card-deck">
            <div className="card">
              {/* <img className="card-img-top" src="..." alt="Card image cap"></img> */}
              <div className="card-body">
                <h5 className="card-title">1. Tell us what you want</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
            <div className="card">
              {/* <img className="card-img-top" src="..." alt="Card image cap"></img> */}
              <div className="card-body">
                <h5 className="card-title">2. Receive Quotes</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
            <div className="card">
              {/* <img className="card-img-top" src="..." alt="Card image cap"></img> */}
              <div className="card-body">
                <h5 className="card-title">3. Compare and hire</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
