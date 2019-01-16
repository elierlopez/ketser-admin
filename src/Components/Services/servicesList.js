import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'
import React, { Component } from 'react'
import ServiceItem from './serviceItem'
import { replaceServices } from '../../Actions/serviceActions'

class AllServices extends Component {
    componentDidMount() {
        this.props.load()
    }

    servicesTable = () => {
        return (
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Id</th>
                        <th>Name</th>
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
        return this.props.services.map(service => {
            return (
                <ServiceItem
                    key={service.Id}
                    {...service}
                />
            )
        })
    }

    render() {
        return (
            <div>
                <hr />
                {this.servicesTable()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        services: state.services
    }
}

const mapDispatchToProps = dispatch => {
    return {
        load: () => {
            dispatch(replaceServices())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllServices)