import React, { Component } from 'react'
import { connect } from "react-redux";
import { Route, Redirect } from 'react-router-dom'

class NonAuthorizedRoute extends Component {
    render() {
        const { component: Component, ...rest } = this.props

        return (
            <Route {...rest}
                render={props =>
                    localStorage.getItem("token")
                        ?
                        <Redirect to={{
                            pathname: '/',
                            state: { from: props.location }
                        }} />
                        :
                        <Component {...props} />
                } />
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
    }
}

export default connect(mapStateToProps)(NonAuthorizedRoute)