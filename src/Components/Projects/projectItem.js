import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { dateAndDefaultTimeFormat } from '../../Util/formaters'
// import { PersonImagePath } from '../../Actions/backendUrl'

class ProjectItem extends Component {
    simpleRow = ({ Id, Service, Description, CreatedAt, StartDate}) => {
        return (
            <tr >
                <td className="names">{Id} {Service.Name}</td>
                <td className="names">{Description}</td>
                <td>{dateAndDefaultTimeFormat(CreatedAt)}</td>
                <td>{dateAndDefaultTimeFormat(StartDate)}</td>
                <td>

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