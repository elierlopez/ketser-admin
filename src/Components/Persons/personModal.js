import { Modal, Button, FormControl, FormGroup, Checkbox } from 'react-bootstrap'
import React, { Component } from 'react'

class PersonsModal extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         isModalOpen: false,
    //         modalPerson: {}
    //     }
    // }

    modal = ({ isModalOpen, person, handleSave, closeModalHandler }) => {
        return (
            person
                ?
                <div>
                    <Modal
                        keyboard={true}
                        show={isModalOpen}
                        onHide={closeModalHandler}
                        dialogClassName="custom-modal">
                        {/* onSubmit={handleSave({ Id: this.IdInput.value, FirstName: this.FirstNameInput.value, LastName: this.LastNameInput.value })} */}
                        <form >

                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-lg">
                                    UPDATE PERSON
                    </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <input type="hidden" defaultValue={person.Id} ref={IdInput => this.IdInput = IdInput} />

                                <FormGroup controlId="personName">
                                    <label>Person Name</label>
                                    <FormControl type="text" placeholder="Enter Name" defaultValue={person.FirstName} inputRef={FirstNameInput => this.FirstNameInput = FirstNameInput} />
                                </FormGroup>
                                <FormGroup controlId="personLastName">
                                    <label>Person Last Name</label>
                                    <FormControl type="text" placeholder="Enter Last Name" defaultValue={person.LastName} inputRef={LastNameInput => this.LastNameInput = LastNameInput} />
                                </FormGroup>
                                <Checkbox type="checkbox" inputRef={ref => this.isDeletedInput = ref} defaultChecked={person.Deleted}>Is Deleted</Checkbox>


                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={closeModalHandler}>CLOSE</Button>
                                <Button bsStyle="info" type="submit" className="btn btn-primary">SUBMIT</Button>
                            </Modal.Footer>
                        </form>
                    </Modal>
                </div>
                :
                React.Fragment
        )
    }

    render() {
        return (
            this.modal(this.props)
        )
    }
}
export default PersonsModal