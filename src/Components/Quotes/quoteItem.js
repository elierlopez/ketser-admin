import React, { Component } from 'react'
import { dateAndDefaultTimeFormat } from '../../Util/formaters'
import { Button } from 'react-bootstrap'

class QuoteItem extends Component {
    simpleRow = ({ ProfessionalProfile, Price, CreatedAt, RemoveQuote }) => {
        return (
            <tr >
                <td className="names">{ProfessionalProfile.Person.FirstName} {ProfessionalProfile.Person.LastName}</td>
                <td>{Price}</td>
                <td className="names">{dateAndDefaultTimeFormat(CreatedAt)}</td>
                <td className="names">
                    <Button variant="danger" onClick={RemoveQuote}>
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