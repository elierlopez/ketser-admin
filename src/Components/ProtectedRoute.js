import React from 'react'
import { Route, Redirect } from 'react-router-dom'
// UNUSED
 
const ProtectedRoute = ({ component: Component, ...rest }) => (

    <Route {...rest}
        render={props => {
            return false
                ?
                <Component {...props} />
                :
                <Redirect to={{
                    pathname: '/Login',
                    state: { from: props.location }
                }} />
        }
        } />
)

export default ProtectedRoute