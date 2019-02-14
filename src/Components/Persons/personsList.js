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

    openModalHandler = (e, modalPerson) => {
        console.log(modalPerson)
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

    handleSave = (event, person) => {
        event.preventDefault()
        console.log(this.nameInput.value + '-')
        this.props.save(person)
        this.closeModalHandler()
    }

    personTable = () => {
        return (
            <Table striped bordered condensed hover>
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
                    openModal={e => this.openModalHandler(e, person)}
                />
            )
        })
    }

    render() {
        return (
            <div>
                <hr />
                {this.personTable()}

                {/* hay que mandar este modal a otro component
                 y en el onSave poner
                    onClick={this.handlesSave} 
                 asi sin parametros */}

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