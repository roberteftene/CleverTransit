import React from "react"
import { Modal, Button, Card } from "react-bootstrap";
import { Redirect } from 'react-router-dom';
import './ProfileInfoCard.css'

export default class ProfileInfoCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isModalDeleteOpen: false,
            isModalEditOpen: false,
            redirect: false
        }
    }

    openDeleteModal = () => this.setState({ isModalDeleteOpen: true });
    closeDeleteModal = () => this.setState({ isModalDeleteOpen: false });

    deleteLoggedInUser = () => { 
        // delete user from database
        window.location.href = "/"
    }

    openEditModal = () => this.setState({ isModalEditOpen: true });
    closeEditModal = () => this.setState({ isModalEditOpen: false });

    saveModifications = () => {

    }

    render() {
        return (
            <div className="infoCard-container">

                <Card className="profile-card">
                    <Card.Header className="card-header">My Information</Card.Header>
                    <Card.Body>

                        <Card.Title>First Name</Card.Title>
                        <Card.Text className="profile-card-text">Robert</Card.Text>
                        
                        <Card.Title>Last Name</Card.Title>
                        <Card.Text className="profile-card-text">Eftene</Card.Text>

                        <Card.Title>Username</Card.Title>
                        <Card.Text className="profile-card-text">roberteftene25</Card.Text>

                        <Card.Title>Email</Card.Title>
                        <Card.Text className="profile-card-text">roberteftene25@gmail.com</Card.Text>

                        <Card.Title>Password</Card.Title>
                        <Card.Text className="profile-card-text">You can manage your password by pressing the "Edit profile" button.</Card.Text>


                        
                        <Button variant="primary" className="profile-card-btn" onClick={this.openEditModal}>Edit profile</Button>
                        <Modal
                            aria-labelledby="contained-modal-title-vcenter"
                            size="lg"
                            centered show={this.state.isModalEditOpen} onHide={this.closeEditModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>Edit profile</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h5>Here you may edit your profile information.</h5>

                                <p>Edit text boxes must be added here with prevState - logged in user information and the button must be set to save the newly modified info.</p>

                                <Button variant="primary" className="btn-edit-profile" onClick={this.saveModifications}>Save modifications</Button>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.closeEditModal}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>




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