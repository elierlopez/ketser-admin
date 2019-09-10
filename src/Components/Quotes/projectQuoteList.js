import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'
import { saveProject } from '../../Actions/projectActions'
import QuoteItem from '../Quotes/quoteItem'
import ProjectForm from '../Quotes/projectForm'

class projectQuoteList extends Component {

    constructor() {
        super()
        this.state = {
            projectId: 0,
            isModalOpen: false,
            selectedProject: {}
        }
    }

    onProjectUpdate = (project) => {
        console.log(project)
    }

    renderContent = () => {
        const index = this.props.projects.findIndex(i => i.Id == this.props.match.params.projectId)
        const proj = this.props.projects[index]
        return (
            <React.Fragment>

                <ProjectForm
                    project={proj}
                    onProjectUpdate={this.onProjectUpdate} />
                    
                <hr />

                {
                    proj.Quotes.length > 0
                        ?
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Professional</th>
                                    <th>Price</th>
                                    <th>Created At</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderQuoteItems(proj.Quotes)}
                            </tbody>
                        </Table>
                        :
                        <h5>NO QUOTES YET</h5>
                }
            </React.Fragment>
        );
    }

    renderQuoteItems = quotes => {
        return quotes.map(quote => {
            return (
                <QuoteItem
                    key={quote.Id}
                    {...quote}
                    Ï />
            )
        })
    }

    render() {
        return (
            <div>
                <hr />
                {this.renderContent()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        projects: state.projects,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        save: project => {
            dispatch(saveProject(project))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(projectQuoteList)