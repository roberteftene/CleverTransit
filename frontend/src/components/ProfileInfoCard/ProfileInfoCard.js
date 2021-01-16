import React from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './ProfileInfoCard.css'

export default class ProfileInfoCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="infoCard-container">

                {/* <Card>
                    <Card.Title>My information</Card.Title>
                    <Card.Text>Name: Robert Eftene</Card.Text>
                    <Card.Text>Mail: roberteftene25@gmail.com</Card.Text>
                    <Card.Text>Password: blabla</Card.Text>
                </Card> */}

                <Card className="profile-card">
                    <Card.Header className="card-header">My Information</Card.Header>
                    <Card.Body>

                        <Card.Title>Name</Card.Title>
                        <Card.Text className="card-text">Robert Eftene</Card.Text>

                        <Card.Title>Username</Card.Title>
                        <Card.Text className="card-text">roberteftene25</Card.Text>

                        <Card.Title>Email</Card.Title>
                        <Card.Text className="card-text">roberteftene25@gmail.com</Card.Text>

                        <Card.Title>Password</Card.Title>
                        <Card.Text className="card-text">*********</Card.Text>

                        <Button variant="primary" className="profile-card-btn">Edit profile</Button>
                        <Button variant="primary" className="profile-card-btn">Delete your profile</Button>

                    </Card.Body>
                </Card>

            </div>
        );
    }

}