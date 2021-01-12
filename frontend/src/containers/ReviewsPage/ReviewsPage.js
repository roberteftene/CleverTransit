import React from 'react'
import "./ReviewsPage.css"
import MotMenu from "../../components/MotMenu/MotMenu"
import Linecard from "../../components/LineCard/LineCard"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'
import ReviewInfo from '../../components/ReviewCard/ReviewInfo'

export default class ReviewsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            methodOfTransportId: 5,
            lineId:1,
            isViewReviewsSelected:false,
            lines: [],
            popularReviewsArray:[],
            isPopular:false
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/transport-method/${this.state.methodOfTransportId}/lines`)
                .then(result => {
                    const linesByMot = result.data;
                    this.setState({ lines: linesByMot })
                })
    }

    componentDidUpdate(prevProps,prevState) {
        
        if (this.state.methodOfTransportId !== prevState.methodOfTransportId) {
            
            if(this.state.methodOfTransportId === 9) {
                this.setState({isPopular:true});
                axios.get('http://localhost:3000/popular-reviews')
                .then(result => {
                    const popularReviews = result.data;
                    this.setState({popularReviewsArray:popularReviews});
                })
            } else {

            this.setState({isPopular:false})
            axios.get(`http://localhost:3000/transport-method/${this.state.methodOfTransportId}/lines`)
                .then(result => {
                    const linesByMot = result.data;
                    this.setState({ lines: linesByMot })
                })
            }

        }

    }


    handleMotSelection = (methodId) => {
        this.setState({ methodOfTransportId: methodId });
    }

    handleViewReviewsSelection =(lineId) => {
        this.setState({lineId:lineId, isViewReviewsSelected:true});
    }


    render() {
        return <>
            <Row>
                <Col className="mot-menu-col" sm={2}>
                    <MotMenu className="mot-menu" onMotSelected={this.handleMotSelection}></MotMenu>
                </Col>

                <Col sm={10}>
                    {
                        this.state.isPopular === false && (
                            <>
                                <Linecard linesByMot={this.state.lines} onViewReviewsSelected={this.handleViewReviewsSelection}></Linecard>
                            </>
                        )
                    }
                    {
                        this.state.isPopular===true && (
                            <>
                                {this.state.popularReviewsArray.map((review) => {
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
                        )
                    }
                </Col>


            </Row>
        </>
    }
}