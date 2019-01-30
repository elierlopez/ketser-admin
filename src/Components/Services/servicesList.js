import { connect } from 'react-redux'
import { Table, Modal, Button } from 'react-bootstrap'
import React, { Component } from 'react'
import ServiceItem from './serviceItem'
import { replaceServices, saveService } from '../../Actions/serviceActions'

class AllServices extends Component {
    constructor() {
        super();
        this.state = {
            isModalOpen: false,
            modalService: {}
        }
    }

    openModalHandler = (e, modalService) => {
        this.setState({
            isModalOpen: true,
            modalService
        });
    }

    closeModalHandler = () => {
        this.setState({
            isModalOpen: false
        });
    }

    componentDidMount() {
        this.props.load()
    }

    handleSave = service => {
        this.props.save(service)
        this.closeModalHandler()
    }

    servicesTable = () => {
        return (
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderUserItems()}
                </tbody>
            </Table>
        );
    }

    renderUserItems = () => {
        return this.props.services.map(service => {
            return (
                <ServiceItem
                    key={service.Id}
                    {...service}
                    openModal={e => this.openModalHandler(e, service)}
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
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-lg">
                            Modal heading
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Wrapped Text</h4>
                        <input type="hidden"
                            defaultValue={this.state.modalService.Id}
                            ref={IdInput => this.IdInput = IdInput}
                        />
                        <input type="text"
                            placeholder="Service Name"
                            defaultValue={this.state.modalService.Name}
                            ref={NameInput => this.NameInput = NameInput}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeModalHandler}>Close</Button>
                        <Button onClick={() => this.handleSave({ Name: this.NameInput.value, Id: this.IdInput.value })}>Save</Button>
                    </Modal.Footer>
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
            dispatch(replaceServices())
        },
        save: service => {
            dispatch(saveService(service))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllServices)