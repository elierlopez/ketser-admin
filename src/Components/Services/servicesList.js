import { connect } from 'react-redux'
import { Table, Modal, Button, FormControl, FormGroup, Checkbox } from 'react-bootstrap'
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
        console.log(modalService)
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

    handleSave = event => {
        event.preventDefault();

        console.log({
            Id: this.IdInput.value,
            Name: this.NameInput.value,
            Deleted: this.isDeletedInput.checked
        })

        this.props.save({
            Id: this.IdInput.value,
            Name: this.NameInput.value,
            Deleted: this.isDeletedInput.checked
        })
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


                {/*
                 hay que mandar este modal a otro component
                 y en el onSave poner
                    onClick={this.handlesSave} 
                 asi sin parametros
                 */}
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
                            <input type="hidden" defaultValue={this.state.modalService.Id} ref={IdInput => this.IdInput = IdInput} />

                            <FormGroup controlId="serviceName">
                                <label>Service Name</label>
                                <FormControl type="text" placeholder="Enter Service Name" defaultValue={this.state.modalService.Name} inputRef={NameInput => this.NameInput = NameInput}/>
                            </FormGroup>
                            <Checkbox type="checkbox" inputRef={ref => this.isDeletedInput = ref} defaultChecked={this.state.modalService.Deleted}>Is Deleted</Checkbox>                            


                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.closeModalHandler}>CLOSE</Button>
                            <Button bsStyle="info" type="submit" className="btn btn-primary">SUBMIT</Button>
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
            dispatch(replaceServices())
        },
        save: service => {
            dispatch(saveService(service))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllServices)