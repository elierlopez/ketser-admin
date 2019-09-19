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
import { ProtectedRoute, UnlogedRoute } from "./CustomRoutes";
import { NotFoundPage } from './Components/NotFoundPage'

class App extends Component {

  componentDidMount() {
    this.props.tryAutoLogin()
  }

  routes = () => {
    return (
      <Switch>
        <UnlogedRoute path="/login" exact component={Login} />
        <ProtectedRoute path="/" exact component={Home} />
        <ProtectedRoute path="/services" component={ServicesList} />
        <ProtectedRoute path="/persons" component={PersonList} />
        <ProtectedRoute path="/projects" component={ProjectList} />
        <ProtectedRoute path="/quotes/:projectId" component={projectQuoteList} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
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
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    tryAutoLogin: () => dispatch(authActions.authCheckStatus())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App) 