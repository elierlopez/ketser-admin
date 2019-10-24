import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import DatePicker from "react-datepicker";

import { replacePersons } from '../../Actions/personActions'
import { replaceServices } from '../../Actions/serviceActions'
import { project } from '../../Constants/modelDefaults'

class CreateProject extends React.Component {

    defaultProject = {}

    constructor(props) {
        super(props)
        this.defaultProject = props.project != null ? props.project : project

        this.state = {
            startDate: new Date()
        }
    }

    setStartDate = startDate => {
        this.setState({
            startDate: startDate
        })

        this.changeValue({ StartDate: startDate })
    }


    changeValue = projectProp => {
        this.defaultProject = {
            ...this.defaultProject, ...projectProp
        }
        this.props.updateProjectValue(this.defaultProject)
    }

    componentDidMount = () => {
        if (this.props.persons.length == 0)
            this.props.getPersons()

        // if (this.props.services.length == 0) 
        //force to load projects as I need only the active ones here 
        this.props.getServices()
    }


    createProjectForm = () => (
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
                    Location
                </Form.Label>
                <Col sm={10}>
                    <Form.Control
                        type="text"
                        placeholder="Location"
                        onChange={e => this.changeValue({ Location: e.target.value })} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} >
                <Form.Label column sm={2}>
                    Zip Code
                </Form.Label>
                <Col sm={10}>
                    <Form.Control
                        type="text"
                        placeholder="ZipCode"
                        onChange={e => this.changeValue({ ZipCode: e.target.value })} />
                </Col>
            </Form.Group>

            <Row>
                <Col sm={2}>
                    <Form.Label>Start Date</Form.Label>
                </Col>
                <Col sm={10}>
                    <DatePicker
                        id="stControl"
                        className="form-control"
                        selected={this.state.startDate}
                        onChange={this.setStartDate}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="dd/MM/yy hh:mm aa"
                    />
                </Col>
            </Row>

            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                    Service
                </Form.Label>

                <Col sm={10}>
                    <Form.Control
                        as="select"
                        onChange={e => this.changeValue({ ServiceId: e.target.value })} >

                        <option
                            key={0}
                            value={0}>
                            Select a service ..
                        </option>

                        {this.props.services.map(svc => {
                            return (
                                <option
                                    key={svc.Id}
                                    value={svc.Id}>
                                    {svc.Name}
                                </option>
                            )
                        })}
                    </Form.Control>
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                    Person
                </Form.Label>

                <Col sm={10}>
                    <Form.Control
                        as="select"
                        onChange={e => this.changeValue({ PersonId: e.target.value })} >

                        <option
                            key={0}
                            value={0}>
                            Select a person ..
                        </option>

                        {this.props.persons.map(person => {
                            return (
                                <option
                                    key={person.Id}
                                    value={person.Id}>
                                    {person.FullName}
                                </option>
                            )
                        })}
                    </Form.Control>
                </Col>
            </Form.Group>

        </Form>
    )

    render() {
        return this.createProjectForm()
    }
}

const mapStateToProps = state => {
    return {
        persons: state.persons,
        services: state.services
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPersons: () => {
            dispatch(replacePersons())
        },
        getServices: () => {
            dispatch(replaceServices())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)