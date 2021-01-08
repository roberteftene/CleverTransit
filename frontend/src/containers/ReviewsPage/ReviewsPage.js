import React from 'react'
import "./ReviewsPage.css"
import MotMenu from "../../components/MotMenu/MotMenu"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

export default class ReviewsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { }
    }


    render() {
        return <>

            <Row>
                <Col sm={2}>
                <MotMenu  className="mot-menu"></MotMenu>
                </Col>
                
                <Col sm={10}>
                <Card>
                <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
                </Col>
               
            
            </Row>
        </>
    }
}