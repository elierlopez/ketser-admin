import React, { Component } from 'react';
import { Image } from 'react-bootstrap'

class ServiceItem extends Component {
    simpleRow = ({ id, image = 'http://ketser.azurewebsites.net/images/services/60.jpeg', name }) => {
        return (
            <tr >
                <td className="photo"> <Image src={image} circle responsive /> </td>
                <td className="names">{id}</td>
                <td className="names">{name}</td>
                <td></td><td></td>
            </tr>
        )
    }

    render() {
        return this.simpleRow(this.props)
    }
}

export default ServiceItem