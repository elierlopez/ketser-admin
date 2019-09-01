import React, { Component } from 'react'
import { dateAndDefaultTimeFormat } from '../../Util/formaters'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import { PersonImagePath } from '../../Actions/backendUrl'

class ProjectItem extends Component {
    simpleRow = ({ Id, Service, Description, CreatedAt, openModal }) => {
        return (
            <tr onDoubleClick={openModal} >
                <td className="names">{Service.Name}</td>
                <td className="names">{Description}</td>
                <td className="names">{dateAndDefaultTimeFormat(CreatedAt)}</td>
                <td className="names">

                    <Link to={'/Quotes/' + Id} >
                        <Button variant="success">
                            GO
                        </Button>
                    </Link>

                </td>
            </tr>
        )
    }

    render() {
        return this.simpleRow(this.props)
    }
}

export default ProjectItem