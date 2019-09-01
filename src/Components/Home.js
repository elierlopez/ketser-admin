import React from 'react';
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div className="App">
            <br />
            HOME
            <br />
            <br />
            <Link to='/services'>Services</Link>
            <br />
            <Link to="/persons" >Persons</Link>
            <br />
            <Link to="/projects" >Projects</Link>

        </div >
    )
}