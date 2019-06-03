import React from 'react';
import { NavLink } from 'react-router-dom'

export const Home = () => {
    return (
        <div className="App">
            <br />
            HOME
            <br />
            <br />
            <NavLink to="/services">Services</NavLink>
            <br />
            <NavLink to="/persons" >Persons</NavLink>
        </div>
    )
}