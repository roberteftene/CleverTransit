import React from "react"
import ProfileInfoCard from "../../components/ProfileInfoCard/ProfileInfoCard"

export default class ProfilePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        return <>
            <div>
                <ProfileInfoCard></ProfileInfoCard>
            </div>
        </>
    }

}