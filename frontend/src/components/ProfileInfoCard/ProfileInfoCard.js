import React from "react"
import { Modal, Button, Card } from "react-bootstrap";
import { Redirect } from 'react-router-dom';
import './ProfileInfoCard.css'

export default class ProfileInfoCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isModalDeleteOpen: false,
            redirect: false
        }
    }

    openDeleteModal = () => this.setState({ isModalDeleteOpen: true });
    closeDeleteModal = () => this.setState({ isModalDeleteOpen: false });

    deleteLoggedInUser = () => { 
        // delete user from database
        window.location.href = "/"
    }

    render() {
        return (
            <div className="infoCard-container">

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
                        <Button variant="primary" className="profile-card-btn" onClick={this.openDeleteModal}>Delete your profile</Button>

                        <Modal
                            aria-labelledby="contained-modal-title-vcenter"
                            dialogClassName="modal-120w"
                            centered show={this.state.isModalDeleteOpen} onHide={this.closeDeleteModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>Delete profile</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h5>Are you sure that you want to delete your profile?</h5>
                                <Button variant="primary" className="btn-delete-profile" onClick={this.deleteLoggedInUser}>Delete profile</Button>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.closeDeleteModal}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>

                    </Card.Body>
                </Card>

            </div>
        );
    }

}