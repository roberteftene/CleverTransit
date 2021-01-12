import React from 'react'
import Card from 'react-bootstrap/Card'
import ProgressBar from 'react-bootstrap/ProgressBar'
import './ReviewCard.css'
import Button from 'react-bootstrap/Button'
import axios from "axios";


export default class ReviewInfo extends React.Component {
    constructor(props){
        super(props);
        this.state={
            noLikes:this.props.reviewLikes
        }
    }

    handleLikeClick(reviewId) {
        this.setState(prev => ({noLikes: prev.noLikes + 1}))
        let reviewById = [];
        axios.get(`http://localhost:3000/reviews/${reviewId}`)
        .then(res => {
            reviewById = res.data;
            console.log(reviewById);
            axios.put(`http://localhost:3000/reviews/${reviewId}`, {
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
        return(
        <>
         <Card key ={this.props.reviewId}>
                <Card.Body>
                <Card.Title>{this.props.reviewTitle}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{this.props.reviewStartPoint} - {this.props.reviewEndPoint}</Card.Subtitle>
                <Card.Text>{this.props.reviewSmileyFaces}  Likes: {this.state.noLikes}</Card.Text>
                <Card.Text>Leaving Hour: {this.props.reviewLeavingHour} Duration: {this.props.reviewDuration} min</Card.Text>
                <Card.Text className="cardText-noMarginBottom">Congestion Level</Card.Text>
                <ProgressBar now={this.props.reviewCongestion * 20} label={this.props.reviewCongestion * 20}></ProgressBar>
                <Card.Text>{this.props.reviewObservations}</Card.Text>
                <Button className="likeBtn" variant="outline-primary" onClick={()=>this.handleLikeClick(this.props.reviewId)} ><i className="fas fa-thumbs-up like"></i></Button>
                </Card.Body>
            </Card>
        </>
        )
    }
}