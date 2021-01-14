import React from "react"
import './HomePage.css'
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import ReviewInfo from "../../components/ReviewCard/ReviewInfo"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class HomePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            latestReviews:[]
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/latest-reviews')
        .then(res => {
            const reviews = res.data;
            this.setState({latestReviews: reviews})
        })
    }

    render() {
        return (
            <>
            <Row>

                <Col sm={4}>

                <Card className="latest-card">
                <Card.Body>
                <Card.Title>Latest experiences with public transport in Bucharest</Card.Title>
                {this.state.latestReviews.map((review) => {
                let smileyFaces = [];
                for(let i = 0; i <review.satisfaction_level; i++) {
                smileyFaces.push(<i className="faces fas fa-smile"></i>);
                }
                return(
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
                </Card.Body>
            </Card>

                </Col>

                <Col sm={8}>
                <Card>
                    
                </Card>    
                </Col>    

            </Row>

           
            </>
        )
    }

}

