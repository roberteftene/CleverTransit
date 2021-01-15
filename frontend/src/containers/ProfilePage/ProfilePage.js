import React from "react"
import ProfileInfoCard from "../../components/ProfileInfoCard/ProfileInfoCard"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'
import ReviewInfo from '../../components/ReviewCard/ReviewInfo'
import ProfileMenu from '../../components/ProfileMenu/ProfileMenu'
import './ProfilePage.css'

export default class ProfilePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isMyReviews:false
        }
    }

    render() {
        return <>
            {/* <div className="profilePage-container">
                <ProfileInfoCard className="profile-card"></ProfileInfoCard>
                
            </div> */}

            <Row>
                <Col className="options-menu-col" sm={3}>
                    <ProfileMenu className="options-menu"></ProfileMenu>
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
                                <p>User Reviews Here</p>
                            </>
                        )
                    }
                </Col>
            </Row>
        </>
    }
}