import React, { Component } from 'react'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { projectStatus } from '../../Constants/projectStatus';
import { dateAndDefaultTimeFormat } from '../../Util/formaters'
import './index.css'

class ProjectForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            project: props.project,
            startDate: new Date(props.project.StartDate)
        }
    }

    setStartDate = startDate => {
        this.setState({
            startDate: startDate
        })

        this.setState({
            project: {
                ...this.state.project,
                StartDate: startDate
            }
        })
    }

    hanldeProjectUpdate = proj => {
        this.props.onProjectUpdate(proj)
    }

    render() {
        const { project } = this.state
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
                    <Col sm={4}>
                        <Form.Control type="text" defaultValue={dateAndDefaultTimeFormat(project.CreatedAt)} readOnly />
                    </Col>
                    <Col sm={3}>
                    </Col>
                </Row>

                <Row>
                    <Col sm={3}>
                        <Form.Label>Start Date</Form.Label>
                    </Col>
                    <Col sm={5}>
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
                    <Col sm={4}>
                    </Col>
                </Row>

                <Row>
                    <Col sm={3}>
                        <Form.Label>Location</Form.Label>
                    </Col>
                    <Col sm={4}>
                        <Form.Control type="text"
                         defaultValue={project.Location} placeholder="Location"
                         onChange={e => { project.Location = e.target.value }} />
                    </Col>
                    <Col sm={5}>
                    </Col>
                </Row>

                <Row>
                    <Col sm={3}>
                        <Form.Label>Zip Code</Form.Label>
                    </Col>
                    <Col sm={4}>
                        <Form.Control type="text" 
                        defaultValue={project.ZipCode} 
                        placeholder="Zip Code" 
                        onChange={e => { project.ZipCode = e.target.value }} />

                    </Col>
                    <Col sm={5}>
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
                        <Button variant="primary" type="button" onClick={() => this.hanldeProjectUpdate(project)}>
                            SAVE CHANGES
                        </Button>
                    </Col>
                </Row>
            </Container >
        )

    }
}

export default ProjectForm