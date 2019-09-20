import { connect } from 'react-redux'
import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

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
import { AuthorizedRoute, NonAuthorizedRoute } from "./RouteGuards";
import { NotFoundPage } from './Components/NotFoundPage'

class App extends Component {

  componentDidMount() {
    this.props.tryAutoLogin()
  }

  routes = () => {
    return (
      this.props.isInitialized ?
        <Switch>
          <NonAuthorizedRoute path="/login" exact component={Login} />

          <AuthorizedRoute path="/" exact component={Home} />
          <AuthorizedRoute path="/services" component={ServicesList} />
          <AuthorizedRoute path="/persons" component={PersonList} />
          <AuthorizedRoute path="/projects" component={ProjectList} />
          <AuthorizedRoute path="/quotes/:projectId" component={projectQuoteList} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
        :
        <h3>Loading ma fren ..</h3>  //shall be a spinner.
    )
  }


  render() {
    return (
      <BrowserRouter>

        <React.Fragment>
          <div className="App">
            <Link to="/">
              <header className="App-header">
                < img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">ADMIN</h1>
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
    isAuthenticated: state.auth.token !== null,
    isInitialized: state.app.isInitialized
  }
}

const mapDispatchToProps = dispatch => {
  return {
    tryAutoLogin: () => dispatch(authActions.authCheckStatus())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App) 