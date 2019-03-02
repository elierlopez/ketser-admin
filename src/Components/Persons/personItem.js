import React, { Component } from 'react';
import { Image } from 'react-bootstrap'
// import { PersonImagePath } from '../../Actions/backendUrl'

class PersonItem extends Component {
    simpleRow = ({ Id, image = 'http://ketser.azurewebsites.net/images/persons/1.jpg', FirstName, LastName, openModal }) => {
        return (
            <tr onDoubleClick={openModal} >
                <td className="photo">
                    <Image src={image} responsive circle/>
                    {/* <Image src={`${PersonImagePath}/${Id}.jpg`} height={35} rounded  /> */}
                </td>
                <td className="names">{FirstName}</td>
                <td className="names">{LastName}</td>
                <td></td>
                <td></td>
            </tr>
        )
    }

    render() {
        return this.simpleRow(this.props)
    }
}

export default PersonItem