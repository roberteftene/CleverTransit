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
        
       

        return <>
        
        {this.props.reviews.map(review => {
            let smileyFaces = [];
            for(let i = 0; i <review.congestion_level ; i++) {
            smileyFaces.push(<i className="faces fas fa-smile"></i>);
            }
            return (  
            <Card>
                <Card.Body>
                <Card.Title>{review.review_title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{review.start_point} - {review.end_point}</Card.Subtitle>
                <Card.Text>{smileyFaces}  Likes: {review.review_noLikes}</Card.Text>
                <Card.Text>Leaving Hour: {review.leaving_hour} Duration: {review.duration} min</Card.Text>
                <Card.Text className="cardText-noMarginBottom">Congestion Level</Card.Text>
                <ProgressBar now="60" label="60"></ProgressBar>
                <Card.Text>{review.observations}</Card.Text>
                </Card.Body>
            </Card>
            )
        } 
        )}
        </>
    }
}