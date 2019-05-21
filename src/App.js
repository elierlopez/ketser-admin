import React, { Component } from 'react';
import './App.css';
import ServicesList from './Components/Services/servicesList'
import PersonList from './Components/Persons/personsList'
import { Home } from './Components/Home'
import Login from './Components/Auth/logIn'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import ProtectedRoute from './Components/ProtectedRoute'
import logo from './logo.svg';


class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div className="App">
          <NavLink to="/">
            <header className="App-header">
              < img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">KETSER ADMIN</h1>
            </header>
          </NavLink>

          <br></br>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/services" component={ServicesList} />
          <ProtectedRoute path="/persons" component={PersonList} />
          <Route path="/Login" component={Login} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;