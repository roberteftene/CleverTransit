import React from 'react'
import "./ReviewsPage.css"
import MotMenu from "../../components/MotMenu/MotMenu"
import Linecard from "../../components/LineCard/LineCard"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'

export default class ReviewsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            methodOfTransportId: 5,
            lines: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/transport-method/${this.state.methodOfTransportId}/lines`)
                .then(result => {
                    const linesByMot = result.data;
                    this.setState({ lines: linesByMot })
                })
    }

    componentDidUpdate(prevProps,prevState) {
        
        if (this.state.methodOfTransportId !== prevState.methodOfTransportId) {

            axios.get(`http://localhost:3000/transport-method/${this.state.methodOfTransportId}/lines`)
                .then(result => {
                    const linesByMot = result.data;
                    this.setState({ lines: linesByMot })
                })

        }

    }


    handleMotSelection = (methodId) => {
        this.setState({ methodOfTransportId: methodId });
    }


    render() {
        return <>
            <Row>
                <Col className="mot-menu-col" sm={2}>
                    <MotMenu className="mot-menu" onMotSelected={this.handleMotSelection}></MotMenu>
                </Col>

                <Col sm={10}>
                    <Linecard className="line-card" linesByMot={this.state.lines}></Linecard>
                </Col>


            </Row>
        </>
    }
}