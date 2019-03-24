import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'
import React, { Component } from 'react'
import { replacePersons, savePerson } from '../../Actions/personActions'
import PersonItem from './personItem';
import PersonModal from './personModal'


class PersonsList extends Component {
    constructor() {
        super()
        this.state = {
            isModalOpen: false,
            modalPerson: {}
        }
    }

    openModalHandler = (modalPerson) => {
        this.setState({
            isModalOpen: true,
            modalPerson
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

    deactivateHandler = person => {
        const fd = new FormData()
        fd.append('person', JSON.stringify({
            ...person,
            Deleted: !person.Deleted
        }))
        this.props.save(fd)
    }

    handleSave = person => {
        this.props.save(person)
        this.closeModalHandler()
    }

    personTable = () => {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Last Name</th>
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
        return this.props.persons.map(person => {
            return (
                <PersonItem
                    key={person.Id}
                    {...person}
                    openModal={() => this.openModalHandler(person)}
                    deactivateHanlder={() => this.deactivateHandler(person)}
                />
            )
        })
    }

    render() {
        return (
            <div>
                <hr />
                {this.personTable()}
                <PersonModal
                    isModalOpen={this.state.isModalOpen}
                    person={this.state.modalPerson}
                    handleSave={this.handleSave}
                    handleCloseModal={this.closeModalHandler} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        persons: state.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        load: () => {
            dispatch(replacePersons())
        },
        save: person => {
            dispatch(savePerson(person))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonsList)