import React, { Component } from 'react';
import { Image } from 'react-bootstrap'
// import { ServiceImagePath } from '../../Actions/backendUrl'

class PersonItem extends Component {
    simpleRow = ({ Id, image = 'http://ketser.azurewebsites.net/images/persons/1.jpg', FirstName, LastName, openModal }) => {
        return (
            <tr onDoubleClick={openModal} >
                <td className="photo">
                    <Image src={image} responsive circle/>
                    {/* <Col lg="auto">
                        <Image src={`${ServiceImagePath}/${Id}.jpeg`} responsive rounded />
                    </Col> */}
                </td>
                <td>{Id}</td>
                <td className="names">{FirstName}</td>
                <td className="names">{LastName}</td>
                <td></td>
            </tr>
        )
    }

    render() {
        return this.simpleRow(this.props)
    }
}

export default PersonItem