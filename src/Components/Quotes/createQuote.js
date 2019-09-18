import React, { Component } from 'react'
import { Form, Row, Col } from 'react-bootstrap'
// import { dateAndDefaultTimeFormat } from '../../Util/formaters'
import { quote } from '../../Constants/modelDefaults'
import './index.css'

class CreateQuote extends Component {

    constructor(props) {
        super(props)
        this.state = {
            quote: {
                ...quote,
                ProjectId: props.projectId,
            }
        }
    }

    changeValue = quoteProp => {
        this.setState({
            quote: {
                ...this.state.quote, ...quoteProp
            }
        }, () => this.props.updateQuoteValue(this.state.quote))
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
                        onChange={e => this.changeValue({ Description: e.target.value })} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} >
                <Form.Label column sm={2}>
                    Price
                </Form.Label>
                <Col sm={10}>
                    <Form.Control
                        type="text"
                        placeholder="$ 0.00"
                        onChange={e => this.changeValue({ Price: e.target.value })} />

                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                    Professional
                </Form.Label>

                <Col sm={10}>
                    <Form.Control
                        as="select"
                        onChange={e => this.changeValue({ ProfessionalId: e.target.value })} >

                        <option
                            key={0}
                            value={0}>
                            Select a professional ...
                        </option>

                        <option
                            key={1}
                            value={24} >
                            El mejor fotografo
                        </option>
                        <option
                            key={2}
                            value={25} >
                            El peor fotografo
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
                        onChange={e => this.changeValue({ Seen: e.target.checked })}
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