import React from 'react'
import { Route, Redirect } from 'react-router-dom'
// import { connect } from 'react-redux'

// class ProtectedRoute extends Component {
//     constructor() {
//         super()
//         this.state = {}
//     }
//     render() {
//         return (
//             <Route {...rest}
//                 render={props => {
//                     return false
//                         ?
//                         <Component {...props} />
//                         :
//                         <Redirect to={{
//                             pathname: '/Login',
//                             state: { from: props.location }
//                         }} />
//                 }
//                 } />
//         )
//     }
// }

// const mapStateToProps = state => {
//     return {
//         services: state.services
//     }
// }

// export default connect(mapStateToProps)(ProtectedRoute)

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