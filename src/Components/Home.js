import React from 'react';
import { NavLink } from 'react-router-dom'

export const Home = () => {
    return (
        <div className="App">
            <br />
            HOME
            <br />
            <br />
            <NavLink to={{
                pathname: '/services',
                hash: '#submit',
                search: '?quick-submit=true'
            }}>Services</NavLink>
            <br />
            <NavLink to="/persons" >Persons</NavLink>
            <br />
            <NavLink to="/projects" >Projects</NavLink>

        </div>
    )
}