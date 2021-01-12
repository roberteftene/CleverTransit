import React from 'react'
import Card from 'react-bootstrap/Card'
import ProgressBar from 'react-bootstrap/ProgressBar'
import './ReviewCard.css'
import Button from 'react-bootstrap/Button'
import axios from "axios";

export default class ReviewCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewData : {
                review_title:"",
                start_point:"",
                end_point:"",
                leaving_hour:"",
                duration:0,
                congestion_level:0,
                observations:"",
                satisfaction_level:0,
                review_noLikes:0,
                transportLineId:0,
                userId:1
            }
        }
    }


    handleAddLike(lineId) {
        let reviewById = [];
        axios.get(`http://localhost:3000/reviews/${lineId}`)
        .then(res => {
            reviewById = res.data;
            console.log(reviewById);
            axios.put(`http://localhost:3000/reviews/${lineId}`, {
                "review_title":reviewById.review_title,
                "start_point":reviewById.start_point,
                "end_point":reviewById.end_point,
                "leaving_hour":reviewById.leaving_hour,
                'duration':reviewById.duration,
                'congestion_level':reviewById.congestion_level,
                'observations':reviewById.observations,
                'satisfaction_level':reviewById.satisfaction_level,
                'review_noLikes':reviewById.review_noLikes + 1,
                'transportLineId':reviewById.transportLineId,
                'userId':reviewById.userId
            })
        })

    }

    render() {
        
       

        return <>
        
        {this.props.reviews.map(review => {
            let smileyFaces = [];
            for(let i = 0; i <review.satisfaction_level; i++) {
            smileyFaces.push(<i className="faces fas fa-smile"></i>);
            }
            return (  
            <Card key ={review.id}>
                <Card.Body>
                <Card.Title>{review.review_title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{review.start_point} - {review.end_point}</Card.Subtitle>
                <Card.Text>{smileyFaces}  Likes: {review.review_noLikes}</Card.Text>
                <Card.Text>Leaving Hour: {review.leaving_hour} Duration: {review.duration} min</Card.Text>
                <Card.Text className="cardText-noMarginBottom">Congestion Level</Card.Text>
                <ProgressBar now={review.congestion_level * 20} label={review.congestion_level * 20}></ProgressBar>
                <Card.Text>{review.observations}</Card.Text>
                <Button className="likeBtn" variant="outline-primary" onClick={() => this.handleAddLike(review.id)}><i className="fas fa-thumbs-up like"></i></Button>
                </Card.Body>
            </Card>
            )
        } 
        )}
        </>
    }
}