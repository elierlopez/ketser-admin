import { connect } from 'react-redux'
import { Table, Modal, Button } from 'react-bootstrap'
import React, { Component } from 'react'
import ServiceItem from './serviceItem'
import { replaceServices } from '../../Actions/serviceActions'
// import Modal from '../../Components/Services/serviceItemModal'


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
                        <input type="text" defaultValue={this.state.modalService.Id} />
                        <input type="text" defaultValue={this.state.modalServicegit.Name} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeModalHandler}>Close</Button>
                        <Button onClick={this.closeModalHandler}>Save</Button>
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllServices)