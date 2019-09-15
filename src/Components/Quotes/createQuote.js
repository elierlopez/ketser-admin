import React, { Component } from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import { dateAndDefaultTimeFormat } from '../../Util/formaters'
import './index.css'


class CreateQuote extends Component {

    constructor(props) {
        super(props)
        this.state = {
            projectId: props.project
        }
    }

    createQuoteContent = () => (
        <Form>
            <Form.Group as={Row} >
                <Form.Label column sm={2}>
                    Description
                </Form.Label>
                <Col sm={10}>
                    <Form.Control as="textarea" placeholder="Description" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} >
                <Form.Label column sm={2}>
                    Description
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
                            key={0}>
                            Prof 1
                        </option>
                    </Form.Control>
                </Col>
            </Form.Group>

            <Form.Group as={Row} >
                <Form.Check column sm={2}>
                    Description
                </Form.Check>
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