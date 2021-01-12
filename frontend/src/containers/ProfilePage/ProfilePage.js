import React from "react"
import ProfileInfoCard from "../../components/ProfileInfoCard/ProfileInfoCard"
import './ProfilePage.css'

export default class ProfilePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        return <>
            <div className="profilePage-container">
                <ProfileInfoCard className="profile-card"></ProfileInfoCard>
                <br/>
                <br/>
            </div>
        </>
    }

}