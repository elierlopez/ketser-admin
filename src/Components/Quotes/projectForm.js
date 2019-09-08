import React from 'react'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'

import { dateAndDefaultTimeFormat } from '../../Util/formaters'
import { projectStatus } from '../../Constants/projectStatus';

export const projectForm = (project, onProjectUpdate) => {
    console.log(Object.entries(projectStatus))
    return (
        <Container>
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
                <Col sm={5}>
                </Col>
            </Row>

            <Row>
                <Col sm={3}>
                    <Form.Label>Start Date</Form.Label>
                </Col>
                <Col sm={4}>
                    <Form.Control type="text" defaultValue={dateAndDefaultTimeFormat(project.StartDate)} readOnly />
                </Col>
                <Col sm={5}>
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
                    <Form.Control as="textarea" defaultValue={project.Description} onChange={e => { project.Description = e.target.value }} />
                </Col>
                <Col sm={5}>
                </Col>
            </Row>

            <Row>
                <Col sm={3}>
                    <Form.Label>Status</Form.Label>
                </Col>
                <Col>
                    <Form.Control as="select" defaultValue={project.Status}>
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
                    <Button variant="primary" type="button" onClick={() => onProjectUpdate(project)}>
                        SAVE CHANGES
                    </Button>
                </Col>
            </Row>
        </Container>
    )

} 