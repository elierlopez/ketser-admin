import { connect } from 'react-redux'
import { Table, Button } from 'react-bootstrap'
import React from 'react'

import { replaceProjects, saveProject } from '../../Actions/projectActions'
import ProjectItem from '../Projects/projectItem'
import { modalService } from '../Modal'
import CreateProject from './createProject'


class ProjectList extends React.Component {
    constructor() {
        super()
        this.state = {
            isModalOpen: false,
            modalProject: {}
        }
    }

    componentDidMount() {
        if (this.props.projects.length === 0)
            this.props.load()
    }

    updateProjectValue = project => {
        this.setState({ modalProject: project })
    }

    saveProject = () => {
        this.props.saveProject(this.state.modalProject)
        modalService.close()
    }

    showProjectModal = () => {
        const actions =
            <React.Fragment>
                <Button variant="warning" onClick={() => modalService.close()}>
                    CANCEL
                </Button>
                <Button variant="success" onClick={this.saveProject}>
                    SAVE
                </Button>
            </React.Fragment>

        modalService.show({
            hasTitle: true,
            title: "PROJECT",
            body: <CreateProject
                updateProjectValue={this.updateProjectValue} />,
            actions,
            show: true
        })
    }

    projectTable = () => {
        return (
            <React.Fragment>

                <Button variant="success" onClick={this.showProjectModal}>
                    ADD PROJECT
                </Button>
                <hr />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>Description</th>
                            <th>Created At</th>
                            <th>Start Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderUserItems()}
                    </tbody>
                </Table>
            </React.Fragment>
        );
    }

    renderUserItems = () => {
        return this.props.projects.map(proj => {
            return (
                <ProjectItem
                    key={proj.Id}
                    {...proj}
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
        saveProject: project => {
            dispatch(saveProject(project))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)