import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  ServicesList from './Components/Services/servicesList'

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            < img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">KETSER ADMIN</h1>
          </header>
          <br></br>
          Ketser admin
         <ServicesList/> 
        </div>
    );
  }
}

export default App;