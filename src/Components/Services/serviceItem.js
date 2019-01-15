import React, { Component } from 'react';
import { Image } from 'react-bootstrap'

class ServiceItem extends Component {
    simpleRow = ({ Id, image = 'http://ketser.azurewebsites.net/images/services/60.jpeg', Name }) => {
        return (
            <tr >
                <td className="photo"> <Image src={image} circle responsive /> </td>
                <td className="names">{Id}</td>
                <td className="names">{Name}</td>
                <td></td><td></td>
            </tr>
        )
    }

    render() {
        return this.simpleRow(this.props)
    }
}

export default ServiceItem