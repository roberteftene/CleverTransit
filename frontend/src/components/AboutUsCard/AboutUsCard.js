import React from "react"
import {Button, Card } from 'react-bootstrap'
import './AboutUsCard.css'
export default class AboutUsCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            id: this.props.key,
            name: this.props.name,
            github: this.props.github,
            description: this.props.description,
            img: this.props.img
        }
    }

    btnOpenGithub() {
        window.open(this.state.github);
    }

    render() {
        const {id, img, name, description } = this.state;
        return (
            <div className="about-us-card-container">

                <Card style={{ width: '19rem' }}>
                <Card.Img variant="top" src={img} /> 
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button  onClick={() => this.btnOpenGithub()}>
                            GitHub Profile
                    </Button>
                </Card.Body>
                </Card>

            </div>
        );
    }

}