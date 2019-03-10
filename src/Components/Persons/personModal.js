import { Modal, Button, FormControl, FormGroup, Checkbox, Image } from 'react-bootstrap'
import React, { Component } from 'react'
import { PersonImagePath } from '../../Actions/backendUrl'


class PersonsModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedFile: null
        }
    }

    fileSelectHandler = event => {
        this.setState({ selectedFile: event.target.files[0] })
    }

    handleSubmit = (event) => {
        console.log(JSON.stringify({
            ...this.props.person,
            FirstName: this.FirstName.value,
            LastName: this.LastName.value,
            Deleted: this.Deleted.checked
        }))
        event.preventDefault();
        const fd = new FormData()
        if (this.state.selectedFile)
            fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
        fd.append('person', JSON.stringify({
            ...this.props.person,
            FirstName: this.FirstName.value,
            LastName: this.LastName.value,
            Deleted: this.Deleted.checked
        }))
        this.props.handleSave(fd)
    }

    render = () => {
        const { isModalOpen, person, handleCloseModal } = this.props
        return (
            isModalOpen
                ?
                <div>
                    <Modal
                        keyboard={true}
                        show={isModalOpen}
                        onHide={handleCloseModal}
                        dialogClassName="custom-modal">
                        <form onSubmit={this.handleSubmit} >
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-lg">
                                    UPDATE PERSON
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Image src={`${PersonImagePath}/${person.Id}.jpg`} height={35} rounded onClick={() => this.photoInput.click()} />
                                <input type="file" ref={photoInput => this.photoInput = photoInput} style={{ display: 'none' }} onChange={this.fileSelectHandler} />
                                <br />
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
                                <Button bsStyle="info" className="btn btn-primary" type="submit" >SUBMIT</Button>
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