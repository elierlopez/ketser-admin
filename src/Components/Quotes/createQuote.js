import React, { Component } from 'react'
import { Form, Row, Col } from 'react-bootstrap'
// import { dateAndDefaultTimeFormat } from '../../Util/formaters'
import './index.css'


class CreateQuote extends Component {

    constructor(props) {
        super(props)
        this.state = {
            quote: {
                ProjectId: props.projectId,
                Description: ""
            }
        }
    }

    createQuoteContent = () => (
        <Form>
            <Form.Group as={Row} >
                <Form.Label column sm={2}>
                    Description
                </Form.Label>
                <Col sm={10}>
                    <Form.Control
                        as="textarea"
                        placeholder="Description"
                        onChange={e => this.props.updateQuoteValue({ ...this.state.quote, Description: e.target.value })} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} >
                <Form.Label column sm={2}>
                    Price
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" placeholder="$ 0.00" />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                    Professional
                </Form.Label>

                <Col sm={10}>
                    <Form.Control as="select">
                        <option
                            key={0}
                            value={24} >
                            El mejor fotografo
                        </option>
                    </Form.Control>
                </Col>
            </Form.Group>

            <Form.Group as={Row} >
                <Col sm={2}>
                    <Form.Check
                        id={"chkSeen"}
                        sm={2}
                        custom
                        label={"Seen"}
                    />
                </Col>

                <Col sm={10}>
                </Col>
            </Form.Group>
        </Form>
    )

    render() {
        return this.createQuoteContent()
    }
}




export default CreateQuote