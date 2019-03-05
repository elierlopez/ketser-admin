import React, { Component } from 'react';
import './App.css';
import ServicesList from './Components/Services/servicesList'
import PersonList from './Components/Persons/personsList'
import { Home } from './Components/Home'
import { BrowserRouter, Route } from 'react-router-dom'
import logo from './logo.svg';

class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            < img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">KETSER ADMIN</h1>
          </header>
          <br></br>
          Ketser admin

          <Route path="/" exact component={Home} />
          <Route path="/services" component={ServicesList} />
          <Route path="/persons" component={PersonList} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;