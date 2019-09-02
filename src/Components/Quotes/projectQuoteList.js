import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'
import { saveProject } from '../../Actions/projectActions'
import QuoteItem from '../Quotes/quoteItem'

class projectQuoteList extends Component {

    constructor() {
        super()
        this.state = {
            projectId: 0,
            isModalOpen: false,
            selectedProject: {}
        }
    }

    componentDidMount() {
        // console.log(this.props.match.params.projectId)
        // console.log(this.project)
    }

    quoteTable = () => {
        const index = this.props.projects.findIndex(i => i.Id == this.props.match.params.projectId)
        const proj = this.props.projects[index]
        return (
            proj.Quotes.length > 0
                ?
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Professional</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderQuoteItems(proj.Quotes)}
                    </tbody>
                </Table>
                :
                <h5>NO QUOTES YET</h5>
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
                {this.quoteTable()}
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