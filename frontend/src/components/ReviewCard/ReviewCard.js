import React, { useState } from 'react'
import './ReviewCard.css'
import ReviewInfo from './ReviewInfo'

export default class ReviewCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render() {
        
        return <>
        
        {this.props.reviews.map((review) => {
            let smileyFaces = [];
            for(let i = 0; i <review.satisfaction_level; i++) {
            smileyFaces.push(<i className="faces fas fa-smile"></i>);
            }
            return (  
                <ReviewInfo 
                reviewId={review.id} 
                reviewTitle={review.review_title}
                reviewStartPoint={review.start_point}
                reviewEndPoint={review.end_point}
                reviewCongestion={review.congestion_level}
                reviewSmileyFaces={smileyFaces}
                reviewObservations={review.observations}
                reviewLeavingHour={review.leaving_hour}
                reviewDuration={review.duration}
                reviewLikes={review.review_noLikes}
                ></ReviewInfo>
            )
        } 
        )}
        </>
    }
}