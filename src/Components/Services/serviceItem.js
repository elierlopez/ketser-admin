import React, { Component } from 'react';
import { Image } from 'react-bootstrap'
// import { ServiceImagePath } from '../../Actions/backendUrl'

class ServiceItem extends Component {
    simpleRow = ({ Id, image = 'http://ketser.azurewebsites.net/images/services/60.jpeg', Name, openModal }) => {
        return (
            <tr onDoubleClick={openModal} >
                <td className="photo">
                    <Image src={image}  responsive />
                    {/* <Image src={`${ServiceImagePath}/${Id}.jpeg`} width={40} height={35} /> */}
                </td>
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