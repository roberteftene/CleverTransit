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
            isPopular:false,
            searchContent:"",
            filteredReviewsArray:[],
            MOTs: [],
            validElemForSearchByMOT:{}
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/methods').then(res => { const methods = res.data; this.setState({MOTs:methods})});
        axios.get(`http://localhost:3000/transport-method/${this.state.methodOfTransportId}/lines`)
                .then(result => {
                    const linesByMot = result.data;
                    this.setState({ lines: linesByMot })
                })
    }

    componentDidUpdate(prevProps,prevState) {
        
        if (this.state.methodOfTransportId !== prevState.methodOfTransportId) {
            this.setState({filteredReviewsArray:[]})
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

        if(this.state.searchContent !== prevState.searchContent) {
            
            this.setState({lines:[]})
            axios.get(`http://localhost:3000/reviews`)
                .then(result => {
                    let linesForFilter = result.data;
                    let filteredReviews = linesForFilter.filter((val) => {
                        if(this.state.searchContent === "") {
                            return val;
                        } else if(val.start_point.toLowerCase().includes(this.state.searchContent.toLowerCase()) ||
                        val.end_point.toLowerCase().includes(this.state.searchContent.toLowerCase()) ) {
                            return val;
                        } else if(this.state.MOTs.filter((valMot) => {
                            if(valMot.name.toLowerCase().includes(this.state.searchContent.toLowerCase())){
                                this.setState({validElemForSearchByMOT:valMot});
                                return true;
                            }
                        })) {
                            if(this.state.validElemForSearchByMOT.id === val.transportMethodId) {
                                return val;
                            }
                        }
                    })
                   this.setState({filteredReviewsArray:filteredReviews});

                })
        }

    }

    handleMotSelection = (methodId) => {
        this.setState({ methodOfTransportId: methodId });
    }

    handleViewReviewsSelection =(lineId) => {
        this.setState({lineId:lineId, isViewReviewsSelected:true});
    }

    handleOnChangeSearch = (content) => {
        this.setState({searchContent:content})
    }


    render() {
        return <>
            <Row>
                <Col className="mot-menu-col" sm={3}>
                    <MotMenu className="mot-menu" searchContent={this.handleOnChangeSearch} onMotSelected={this.handleMotSelection}></MotMenu>
                </Col>

                <Col sm={9}>
                    {
                        this.state.isPopular === false && (
                            <>
                                <Linecard motSelected={this.state.methodOfTransportId} linesByMot={this.state.lines} onViewReviewsSelected={this.handleViewReviewsSelection}></Linecard>
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
                    {
                        this.state.searchContent.length > 0 && (
                            <>
                                {this.state.filteredReviewsArray.map((review) => {
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