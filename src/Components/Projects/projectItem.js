import React, { Component } from 'react';
import { Image } from 'react-bootstrap'
// import { PersonImagePath } from '../../Actions/backendUrl'

class ProjectItem extends Component {
    simpleRow = ({ Id, image = 'http://ketser.azurewebsites.net/images/persons/1.jpg', Name, openModal }) => {
        return (
            <tr onDoubleClick={openModal} >
                <td className="photo">
                    <Image src={image} />
                    {/* <Image src={`${PersonImagePath}/${Id}.jpg`} height={35} rounded  /> */}
                </td>
                <td className="names">{Name}</td>
                <td></td>
            </tr>
        )
    }

    render() {
        return this.simpleRow(this.props)
    }
}

export default ProjectItem