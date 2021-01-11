import React from "react"
import {Button, Card } from 'react-bootstrap'
import './AboutUsCard.css'

import Robert from './Robert.JPG'
import Diana from './Diana.JPEG'

export default class AboutUsCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    btnClickRobert() {
        window.open("https://github.com/roberteftene");
    }

    btnClickDiana() {
        window.open("https://github.com/dianacrisan");
    }

    render() {
        return (
            <div className="about-us-card-container">

                <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" />  */}
                <Card.Img variant="top" src={Diana} /> 
                <Card.Body>
                    <Card.Title>Diana Crisan</Card.Title>
                    <Card.Text>
                        Ambitious IT Student
                    </Card.Text>
                    <Button  onClick={this.btnClickDiana.bind(this)}>GitHub Profile</Button>
                </Card.Body>
                </Card>

            </div>
        );
    }

}