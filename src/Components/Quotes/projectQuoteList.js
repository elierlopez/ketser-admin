import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Button } from 'react-bootstrap'
import { saveProject } from '../../Actions/projectActions'
import QuoteItem from '../Quotes/quoteItem'
import ProjectForm from '../Quotes/projectForm'
import CreateQuote from '../Quotes/createQuote'
import { modalService } from '../Modal'
import { addQuote, removeQuote } from '../../Actions/quoteActions'

class projectQuoteList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            projectId: parseInt(props.match.params.projectId),
            modalQuote: {}
        }
    }

    updateProject = project => {
        this.props.updateProject(project)
    }

    addNewQuote = () => {
        this.props.addQuote(this.state.modalQuote)
        modalService.close()
    }

    updateQuoteValue = quote => {
        this.setState({ modalQuote: quote })
    }

    removeQuote = quote => {
        this.props.removeQuote(quote)
    }

    showModal = () => {

        const actions =
            <React.Fragment>
                <Button variant="warning" onClick={() => modalService.close()}>
                    CANCEL
                </Button>
                <Button variant="success" onClick={this.addNewQuote}>
                    SAVE
                </Button>
            </React.Fragment>

        modalService.show({
            hasTitle: true,
            title: "ADD QUOTE",
            body: <CreateQuote
                projectId={this.props.match.params.projectId}
                updateQuoteValue={this.updateQuoteValue} />,
            actions,
            show: true
        })
    }

    renderContent = () => {
        const index = this.props.projects.findIndex(i => i.Id === this.state.projectId)
        const proj = this.props.projects[index]
        return (
            <React.Fragment>

                <ProjectForm
                    project={proj}
                    onProjectUpdate={this.updateProject} />

                <hr />

                <Button onClick={this.showModal}>
                    ADD QUOTE
                </Button>

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
                    RemoveQuote={() => this.removeQuote(quote)}
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
        updateProject: project => {
            dispatch(saveProject(project))
        },
        addQuote: quote => {
            dispatch(addQuote(quote))
        },
        removeQuote: quote => {
            dispatch(removeQuote(quote))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(projectQuoteList)