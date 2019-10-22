import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
// import { dateAndDefaultTimeFormat } from '../../Util/formaters'
import { quote } from '../../Constants/modelDefaults'
import './index.css'
import { loadProfessionals } from '../../Actions/professionalActions'

class CreateQuote extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            quote: {
                ...quote,
                ProjectId: props.projectId,
            },
            professionals: props.professionals
        }
    }

    /*
        componentDidMount occurs only once.
        Even if the props are changed by an action execution as getProfessionals
        this method wont be executed again. Thats why I need to intercept such props update event 
        in componentDidUpdate which is executed either by props change or state update event 
    */
    componentDidMount() {
        if (this.state.professionals.length == 0)
            this.props.getProfessionals()
    }

    /*
        Its a best practice to read the props directly from props (in render method)
        instead of copying them to the state. 
        At least some kind of processing/transformation should be aplied to such props.
        This time I will keep it like this for didcative purposes only  
     */
    componentDidUpdate(prevProps, prevState) {

        if (prevState.professionals.length == 0 && this.props.professionals.length != 0)
            this.setState({ professionals: this.props.professionals })
    }

    changeValue = quoteProp => {
        this.setState({
            quote: {
                ...this.state.quote, ...quoteProp
            }
        }, () => this.props.updateQuoteValue(this.state.quote))
    }

    createQuoteContent = () => (
        <Form>
            <Form.Group as={Row} >
                <Form.Label column sm={2}>
                    Description
                </Form.Label>
                <Col sm={10}>
                    <Form.Control
                        as="textarea"
                        placeholder="Description"
                        onChange={e => this.changeValue({ Description: e.target.value })} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} >
                <Form.Label column sm={2}>
                    Price
                </Form.Label>
                <Col sm={10}>
                    <Form.Control
                        type="text"
                        placeholder="$ 0.00"
                        onChange={e => this.changeValue({ Price: e.target.value })} />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                    Professional
                </Form.Label>

                <Col sm={10}>
                    <Form.Control
                        as="select"
                        onChange={e => this.changeValue({ ProfessionalId: e.target.value })} >

                        <option
                            key={0}
                            value={0}>
                            Select a professional ..
                        </option>

                        {this.state.professionals.map(pro => {
                            return (
                                <option
                                    key={pro.Id}
                                    value={pro.Id}>
                                    {pro.Person.FullName}
                                </option>
                            )
                        })}
                    </Form.Control>
                </Col>
            </Form.Group>

            <Form.Group as={Row} >
                <Col sm={2}>
                    <Form.Check
                        id={"chkSeen"}
                        sm={2}
                        custom
                        label={"Seen"}
                        onChange={e => this.changeValue({ Seen: e.target.checked })}
                    />
                </Col>

                <Col sm={10}>
                </Col>
            </Form.Group>
        </Form>
    )

    render() {
        return this.createQuoteContent()
    }
}

const mapStateToProps = state => {
    return {
        professionals: state.professionals,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProfessionals: () => {
            dispatch(loadProfessionals())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuote)