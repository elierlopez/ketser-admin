import React, { Component } from 'react';
import { Image, Button } from 'react-bootstrap'
// import { PersonImagePath } from '../../Actions/backendUrl'

class PersonItem extends Component {
    simpleRow = ({ Id, image = 'http://ketser.azurewebsites.net/images/persons/1.jpg', FirstName, LastName, Deleted, openModal, deactivateHanlder }) => {
        return (
            <tr onDoubleClick={openModal} >
                <td className="photo">
                    <Image src={image} />
                    {/* <Image src={`${PersonImagePath}/${Id}.jpg`} height={35} rounded  /> */}
                </td>
                <td className="names">{FirstName}</td>
                <td className="names">{LastName}</td>
                <td>
                    <Button onClick={deactivateHanlder} variant={Deleted ? "success" : "danger"}>{Deleted ? "ACTIVAR" : "DESACTIVAR"}</Button>
                </td>
                <td></td>
            </tr>
        )
    }

    render() {
        return this.simpleRow(this.props)
    }
}

export default PersonItem