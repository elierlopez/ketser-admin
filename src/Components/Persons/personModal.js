import { Modal, Button, FormControl, FormGroup, Checkbox } from 'react-bootstrap'
import React, { Component } from 'react'


class PersonsModal extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render = () => {
        const { isModalOpen, person, handleSave, handleCloseModal } = this.props
        return (
            isModalOpen
                ?
                <div>
                    <Modal
                        keyboard={true}
                        show={isModalOpen}
                        onHide={handleCloseModal}
                        dialogClassName="custom-modal">
                        {/* onSubmit={handleSave({ Id: this.IdInput.value, FirstName: this.FirstNameInput.value, LastName: this.LastNameInput.value })} */}
                        <form>

                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-lg">
                                    UPDATE PERSON
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <input type="hidden" defaultValue={person.Id} />

                                <FormGroup controlId="personName">
                                    <label>Person Name</label>
                                    <FormControl type="text" placeholder="Enter Name" defaultValue={person.FirstName} inputRef={name => this.FirstName = name} />
                                </FormGroup>
                                <FormGroup controlId="personLastName">
                                    <label>Person Last Name</label>
                                    <FormControl type="text" placeholder="Enter Last Name" defaultValue={person.LastName} inputRef={lastName => this.LastName = lastName} />
                                </FormGroup>
                                <Checkbox type="checkbox" defaultChecked={person.Deleted} inputRef={Deleted => this.Deleted = Deleted} >Is Deleted</Checkbox>


                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={handleCloseModal}>CLOSE</Button>
                                <Button bsStyle="info" onClick={
                                    () => handleSave({
                                        ...person,
                                        Id: person.Id,
                                        FirstName: this.FirstName.value,
                                        LastName: this.LastName.value,
                                        Deleted: this.Deleted.checked
                                    })
                                } className="btn btn-primary">SUBMIT</Button>
                            </Modal.Footer>
                        </form>
                    </Modal>
                </div>
                :
                React.Fragment
        )
    }
}
export default PersonsModal