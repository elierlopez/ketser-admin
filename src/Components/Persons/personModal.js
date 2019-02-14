import { Modal, Button, FormControl, FormGroup, Checkbox } from 'react-bootstrap'
import React from 'react'

const PersonsModal = ({ isModalOpen, person, handleSave, handleCloseModal }) => {
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
                    <form onSubmit={handleSave}>

                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-lg">
                                UPDATE PERSON
                                </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <input type="hidden" defaultValue={person.Id} />

                            <FormGroup controlId="personName">
                                <label>Person Name</label>
                                <FormControl type="text" placeholder="Enter Name" defaultValue={person.FirstName} />
                            </FormGroup>
                            <FormGroup controlId="personLastName">
                                <label>Person Last Name</label>
                                <FormControl type="text" placeholder="Enter Last Name" defaultValue={person.LastName} />
                            </FormGroup>
                            <Checkbox type="checkbox" defaultChecked={person.Deleted}>Is Deleted</Checkbox>


                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={handleCloseModal}>CLOSE</Button>
                            <Button bsStyle="info" type="submit" className="btn btn-primary">SUBMIT</Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </div>
            :
            React.Fragment
    )
}
export default PersonsModal