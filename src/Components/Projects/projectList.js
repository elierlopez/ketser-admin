import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'
import React, { Component } from 'react'

import { replaceProjects, saveProject } from '../../Actions/projectActions'
import ProjectItem from '../Projects/projectItem'


class ProjectList extends Component {
    constructor() {
        super()
        this.state = {
            isModalOpen: false,
            modalProject: {}
        }
    }

    openModalHandler = (modalProject) => {
        this.setState({
            isModalOpen: true,
            modalProject
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

    handleSave = project => {
        this.props.save(project)
        this.closeModalHandler()
    }

    projectTable = () => {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Service</th>
                        <th>Description</th>
                        <th>Date</th>
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
        return this.props.projects.map(proj => {
            return (
                <ProjectItem
                    key={proj.Id}
                    {...proj}
                    openModal={() => this.openModalHandler(proj)}
                />
            )
        })
    }

    render() {
        return (
            <div>
                <hr />
                {this.projectTable()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        projects: state.projects,
        authToken: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        load: () => {
            dispatch(replaceProjects())
        },
        save: project => {
            dispatch(saveProject(project))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)