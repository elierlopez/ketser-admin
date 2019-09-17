import { connect } from 'react-redux'
import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom'

// ketser assets
import './App.css';
import logo from './logo.svg'
import * as authActions from './Actions/authActions'

// ketser components
import ServicesList from './Components/Services/servicesList'
import PersonList from './Components/Persons/personsList'
import { Home } from './Components/Home'
import Login from './Components/Auth/logIn'
import ProjectList from './Components/Projects/projectList'
import projectQuoteList from './Components/Quotes/projectQuoteList'
import { CustomModal } from './Components/Modal';

class App extends Component {

  componentDidMount() {
    this.props.tryAutoLogin()
  }

  routes = () => {
    return this.props.isAuthenticated ?
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={ServicesList} />
        <Route path="/persons" component={PersonList} />
        <Route path="/projects" component={ProjectList} />
        <Route path="/quotes/:projectId" component={projectQuoteList} />
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

        <React.Fragment>
          <div className="App">
            <Link to="/">
              <header className="App-header">
                < img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">KETSER ADMIN</h1>
              </header>
            </Link>
            {this.routes()}
          </div>
          <CustomModal />
        </React.Fragment>

      </BrowserRouter>
    )
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