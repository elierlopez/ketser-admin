import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const ProtectedRoute = ({ component: Component, ...rest }) => {
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

export const UnlogedRoute = ({ component: Component, ...rest }) => {
    console.log('no se puede venir aqui si ya hay token')
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