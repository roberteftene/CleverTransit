import React from 'react'
import "./ReviewsPage.css"
import MotMenu from "../../components/MotMenu/MotMenu"
import Linecard from "../../components/LineCard/LineCard"
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
                <Linecard className="line-card"></Linecard>
                </Col>
               
            
            </Row>
        </>
    }
}