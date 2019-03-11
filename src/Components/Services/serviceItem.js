import React, { Component } from 'react';
import { Image, Button } from 'react-bootstrap'
// import { ServiceImagePath } from '../../Actions/backendUrl'

class ServiceItem extends Component {
    simpleRow = ({ Id, image = 'http://ketser.azurewebsites.net/images/services/60.jpeg', Name, Deleted, openModal, deactivateHandler }) => {
        return (
            <tr onDoubleClick={openModal} >
                <td className="photo">
                    <Image src={image} responsive />
                    {/* <Image src={`${ServiceImagePath}/${Id}.jpeg`} width={40} height={35} /> */}
                </td>
                <td className="names">{Name}</td>
                <td>
                    <Button onClick={deactivateHandler} bsStyle={Deleted ? "success" : "danger"}>{Deleted ? "ACTIVAR" : "DESACTIVAR"}</Button>
                </td>
            </tr>
        )
    }

    render() {
        return this.simpleRow(this.props)
    }
}

export default ServiceItem