import { connect } from 'react-redux'
import { Table, Modal, Button, FormControl, FormGroup, Form, Image } from 'react-bootstrap'
import React, { Component } from 'react'
import ServiceItem from './serviceItem'
import { replaceServices, saveService } from '../../Actions/serviceActions'
import { ServiceImagePath } from '../../Constants/backendUrl'

class AllServices extends Component {
    constructor() {
        super();
        this.state = {
            isModalOpen: false,
            modalService: {},
            selectedFile: null
        }
    }

    openModalHandler = (e, modalService) => {
        this.setState({
            isModalOpen: true,
            modalService
        })
    }

    closeModalHandler = () => {
        this.setState({
            isModalOpen: false
        })
    }

    componentDidMount() {
        this.props.load()
    }

    fileSelectHandler = event => {
        this.setState({ selectedFile: event.target.files[0] })
    }

    deactivateHandler = service => {
        const fd = new FormData()
        fd.append('service', JSON.stringify({
            ...service,
            Active: !service.Active
        }))
        this.props.save(fd)
    }

    handleSave = event => {
        event.preventDefault();
        const fd = new FormData()
        if (this.state.selectedFile)
            fd.append('image', this.state.selectedFile, this.state.selectedFile.name)

        fd.append('service', JSON.stringify({
            ...this.state.modalService,
            Name: this.NameInput.value,
            Active: this.isActiveInput.checked
        }))
        this.props.save(fd)
        this.closeModalHandler()
    }

    servicesTable = () => {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderServiceItems()}
                </tbody>
            </Table>
        );
    }

    renderServiceItems = () => {
        return this.props.services.map(service => {
            return (
                <ServiceItem
                    key={service.Id}
                    {...service}
                    openModal={e => this.openModalHandler(e, service)}
                    deactivateHandler={() => this.deactivateHandler(service)}
                />
            )
        })
    }

    render() {
        return (
            <div>
                <hr />
                {this.servicesTable()}
                <Modal
                    keyboard={true}
                    show={this.state.isModalOpen}
                    onHide={this.closeModalHandler}
                    dialogClassName="custom-modal">
                    <form onSubmit={this.handleSave}>
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-lg">
                                UPDATE SERVICE
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Image src={`${ServiceImagePath}/${this.state.modalService.Id}.jpg`} height={35} rounded onClick={() => this.photoInput.click()} />
                            <input type="file" ref={photoInput => this.photoInput = photoInput} style={{ display: 'none' }} onChange={this.fileSelectHandler} />
                            <br />

                            <FormGroup controlId="serviceName">
                                <label>Service Name</label>
                                <FormControl type="text" placeholder="Enter Service Name" defaultValue={this.state.modalService.Name} ref={NameInput => this.NameInput = NameInput} />
                            </FormGroup>
                            <Form.Check
                                id={'isActive'}
                                label={'Is Active'}
                                custom
                                type={'checkbox'}
                                ref={Active => this.isActiveInput = Active} 
                                defaultChecked={this.state.modalService.Active} />

                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.closeModalHandler}>CLOSE</Button>
                            <Button variant="success" type="submit" className="btn btn-primary">SUBMIT</Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        services: state.services
    }
}

const mapDispatchToProps = dispatch => {
    return {
        load: () => {
            dispatch(replaceServices(true))
        },
        save: service => {
            dispatch(saveService(service))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllServices)