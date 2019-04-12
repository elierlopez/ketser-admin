import { Button, Form, FormControl, FormGroup } from 'react-bootstrap'
import React, { Component } from 'react'
import { connect } from 'react-redux'
//ketser assets
import { getToken } from '../../Actions/authActions'

class Login extends Component {
    manageLogin = event => {
        event.preventDefault()

        // const fd = new FormData()
        // fd.append('grant_type', 'password')
        // fd.append('username', this.userName.value)
        // fd.append('password', this.pwd.value)
        // this.props.logIn(fd)

        this.props.logIn({
            grant_type: 'password',
            username: this.userName.value,
            password: this.pwd.value
        })
    }

    render = () => {
        return (
            <Form onSubmit={this.manageLogin}>
                <FormGroup controlId="personName">
                    <label>User Name</label>
                    <FormControl type="text" placeholder="user name" ref={name => this.userName = name} />
                </FormGroup>
                <FormGroup controlId="personLastName">
                    <label>PWD</label>
                    <FormControl type="text" placeholder="pwd" ref={pwd => this.pwd = pwd} />
                </FormGroup>
                <Button variant="success" className="btn btn-primary" type="submit">SUBMIT</Button>
            </Form>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        token: state.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logIn: credentials => {
            dispatch(getToken(credentials))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)