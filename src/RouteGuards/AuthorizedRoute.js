import React, { Component } from 'react'
import { connect } from "react-redux";
import { Route, Redirect } from 'react-router-dom'

class AuthorizedRoute extends Component {

    render() {
        const { component: Component, ...rest } = this.props

        return (
            <Route {...rest}
                render={props =>
                    // hay que sacar esto del reducer de otro modo el UI 
                    //no se va actualizar cuando ocurra el timeout
                    //va a ser necesario hacer esta funcion componente y conectarlo a redux
                    localStorage.getItem("token")
                        ?
                        <Component {...props} />
                        :
                        <Redirect to={{
                            pathname: '/Login',
                            state: { from: props.location }
                        }} />
                } />
        )
    }
}


const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
    }
}

export default connect(mapStateToProps)(AuthorizedRoute)