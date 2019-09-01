import React, { Component } from 'react'


class projectQuoteList extends Component {

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <hr />
                <h1> {"QUOTES:" + this.props.match.params.projectId} </h1>
            </div>
        )
    }
}

export default projectQuoteList