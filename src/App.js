import { connect } from 'react-redux'
import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom'

// ketser assets
import './App.css';
import logo from './logo.svg'
import * as authActions from './Actions/authActions'

// ketser components
import ServicesList from './Components/Services/servicesList'
import PersonList from './Components/Persons/personsList'
import { Home } from './Components/Home'
import Login from './Components/Auth/logIn'

class App extends Component {

  componentDidMount() {
    this.props.tryAutoLogin()
  }

  routes = () => {
    // console.log(this.props.auth.token.userName)
    return this.props.isAuthenticated ?
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={ServicesList} />
        <Route path="/persons" component={PersonList} />
        <Redirect to="/" />
      </Switch>
      :
      <Switch>
        <Route path="/" exact component={Login} />
        <Redirect to="/" />
      </Switch>
  }

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
          {this.routes()}
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    tryAutoLogin: () => dispatch(authActions.authCheckStatus())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App) 