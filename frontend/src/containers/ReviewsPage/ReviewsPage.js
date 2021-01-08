import React from 'react'
import axios from 'axios';
import "./ReviewsPage.css"
import MotMenu from "../../components/MotMenu/MotMenu"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

export default class ReviewsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            methodsOfTransport: []
         }
    }

    componentDidMount() {
        axios.get('http://smotocode.app.webtech-superheroes.net:8080/methods')
        .then(result => {
          const methodsOfTransport = result.data;
          console.log(result.data);
          this.setState({ methodsOfTransport })
        })
      }

    render() {
        return <>

            <Row>
                <Col sm={2}>
                <MotMenu  className="mot-menu" methods={this.state.methodsOfTransport}></MotMenu>
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