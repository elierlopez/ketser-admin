import React, { Component } from 'react'
import { dateAndDefaultTimeFormat } from '../../Util/formaters'
import { Button } from 'react-bootstrap'
// import { PersonImagePath } from '../../Actions/backendUrl'

class QuoteItem extends Component {
    simpleRow = ({ Id, ProfessionalProfile, Price, CreatedAt, openModal }) => {
        return (
            <tr onDoubleClick={openModal} >
                <td className="names">{ProfessionalProfile.Person.FirstName} {ProfessionalProfile.Person.LastName}</td>
                <td>{Price}</td>
                <td className="names">{dateAndDefaultTimeFormat(CreatedAt)}</td>
                <td className="names">
                    <Button variant="danger">
                        DELETE
                    </Button>
                </td>
            </tr>
        )
    }

    render() {
        return this.simpleRow(this.props)
    }
}

export default QuoteItem