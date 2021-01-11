import React from 'react'
import Card from 'react-bootstrap/Card'
import ProgressBar from 'react-bootstrap/ProgressBar'
import './ReviewCard.css'

export default class ReviewCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        
        let smileyFaces = [];
        for(let i = 0; i <=5 ; i++) {
            smileyFaces.push(<i className="faces fas fa-smile"></i>);
        }

        return <>
        
        {this.props.reviews.map(review => 

            <Card>
                <Card.Body>
                <Card.Title>FOARTEE AGLOMERATTT!!</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{review.starting_point} + {review.ending_point}</Card.Subtitle>
                <Card.Text>{smileyFaces}</Card.Text>
                <Card.Text>Leaving Hour: {review.leaving_hour} Duration: {review.duration} min</Card.Text>
                <Card.Text className="cardText-noMarginBottom">Congestion Level</Card.Text>
                <ProgressBar now="60" label="60"></ProgressBar>
                <Card.Text>{review.observations}</Card.Text>
                </Card.Body>
            </Card>
        )}
        </>
    }
}