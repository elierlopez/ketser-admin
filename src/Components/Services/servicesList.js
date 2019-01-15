import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'
import React from 'react'
import ServiceItem from './serviceItem'
import { replaceServices } from '../../Actions/serviceActions'

const AllServices = props => {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         services: []
    //     };
    // }

    // componentDidMount() {
    //     console.log('paso el did mount')
    //     this.props.load()        
    // }
    const servicesTable = () => {
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
                    {renderUserItems()}
                </tbody>
            </Table>
        );
    }

    const renderUserItems = () => {
        return props.services.map(service => {
            return (
                <ServiceItem
                    key={service.Id}
                    {...service}
                />
            )
        })
    }

    const render = () => {
        return (
            <div>
                <hr />
                {servicesTable()}
            </div>
        )
    }

    return (render())
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