import React from "react"
import ProfileInfoCard from "../../components/ProfileInfoCard/ProfileInfoCard"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'
import ReviewInfo from '../../components/ReviewCard/ReviewInfo'
import ProfileMenu from '../../components/ProfileMenu/ProfileMenu'
import './ProfilePage.css'
import UserService from '../../Services/UserService'

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
export default class ProfilePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isMyReviews:false,
            loggedUserReviewsArray:[],
        }
        this.userService = new UserService();
    }


    handleOptionSelection = (isRev) => {
        this.setState({ isMyReviews: isRev })
    }

    componentDidMount() {
        axios.get(`${API_BASE_URL}users/${this.userService.getUserIdFromStorage()}/reviews`)
                .then((res) => {
                    const userReviews = res.data;
                    this.setState({loggedUserReviewsArray:userReviews});
                })
    }

    render() {
        return <>
            <Row>
                <Col className="options-menu-col" sm={3}>
                    <ProfileMenu className="options-menu" onOptionSelected={this.handleOptionSelection}></ProfileMenu>
                </Col>

                <Col sm={9}>
                    {
                        this.state.isMyReviews === false && (
                            <>
                                <div className = "profile-container">
                                    <ProfileInfoCard className="profile-card"></ProfileInfoCard>
                                    <br />
                                    <br />
                                </div>
                                
                            </>
                        )
                    }
                    {
                        this.state.isMyReviews===true && (
                            <>
                                {/* <div className = "profile-container">
                                    <br />
                                    <p>User Reviews Here</p>
                                </div> */}
                                <div className = "myreviews-container">
                                    {this.state.loggedUserReviewsArray.map((review) => {
                                    let smileyFaces = [];
                                    for(let i = 0; i <review.satisfaction_level; i++) {
                                    smileyFaces.push(<i className="faces fas fa-smile"></i>);
                                    }
                                    return (  
                                        <div className="container-review">
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
                                    reviewUserId={review.userId}
                                    ></ReviewInfo>
                                    </div>
                                    )
                                } 
                                )}
                            </div>
                            </>
                        )
                    }
                </Col>
            </Row>
        </>
    }
}