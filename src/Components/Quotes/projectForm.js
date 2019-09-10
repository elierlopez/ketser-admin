import React, { Component } from 'react'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'

import { projectStatus } from '../../Constants/projectStatus';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class ProjectForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            project: props.project,
            startDate: new Date(props.project.StartDate),
            createdAt: new Date(props.project.CreatedAt)
        }
    }

    setCreatedAt = createdAt => {
        this.setState({
            createdAt: createdAt
        })
        //TODO: set it in the project as well
    }

    setStartDate = startDate => {
        this.setState({
            startDate: startDate
        })
        //TODO: set it in the project as well
    }

    hanldeProjectUpdate = proj => {
        this.props.onProjectUpdate(proj)
    }

    render() {
        const { project } = this.state
        console.log(project)
        return (
            <Container >
                <Row>
                    <Col sm={3}>
                        <Form.Label>Service</Form.Label>
                    </Col>
                    <Col sm={4}>
                        <Form.Control type="text" defaultValue={project.Service.Name} readOnly />
                    </Col>
                    <Col sm={5}>
                    </Col>
                </Row>

                <Row>
                    <Col sm={3}>
                        <Form.Label>Creation Date</Form.Label>
                    </Col>
                    <Col sm={5}>
                        <DatePicker
                            selected={this.state.createdAt}
                            onChange={this.setCreatedAt}
                            showTimeSelthis
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            dateFormat="dd/MM/yy"
                        />
                    </Col>
                    <Col sm={4}>
                    </Col>
                </Row>

                <Row>
                    <Col sm={3}>
                        <Form.Label>Start Date</Form.Label>
                    </Col>
                    <Col sm={5}>
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.setStartDate}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            dateFormat="dd/MM/yy hh:mm aa"
                        />
                    </Col>
                    <Col sm={4}>
                    </Col>
                </Row>


                <Row>
                    <Col sm={3}>
                        <Form.Label>Location</Form.Label>
                    </Col>
                    <Col sm={3}>
                        <Form.Control type="text" defaultValue={project.Location} placeholder="Location" />
                    </Col>
                    <Col sm={3}>
                        <Form.Control type="text" defaultValue={project.ZipCode} placeholder="Zip Code" />
                    </Col>
                    <Col sm={3}>
                    </Col>
                </Row>

                <Row>
                    <Col sm={3}>
                        <Form.Label>Description</Form.Label>
                    </Col>
                    <Col sm={4} >
                        <Form.Control as="textarea"
                            defaultValue={project.Description}
                            onChange={e => { project.Description = e.target.value }} />
                    </Col>
                    <Col sm={5}>
                    </Col>
                </Row>

                <Row>
                    <Col sm={3}>
                        <Form.Label>Status</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control
                            as="select"
                            defaultValue={project.Status}
                            onChange={e => { project.Status = e.target.value }} >

                            {Object.entries(projectStatus).map(entry => {
                                return (
                                    <option
                                        key={entry[1]}
                                        value={entry[1]}>
                                        {entry[0]}
                                    </option>
                                )
                            })}
                        </Form.Control>
                    </Col>
                    <Col sm={5}>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <Button variant="primary" type="button" onClick={this.hanldeProjectUpdate}>
                            SAVE CHANGES
                    </Button>
                    </Col>
                </Row>
            </Container >
        )

    }
}

export default ProjectForm