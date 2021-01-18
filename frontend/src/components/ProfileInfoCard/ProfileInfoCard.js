import React from 'react';
import { Modal, Button, Card, Form, FormGroup } from 'react-bootstrap';
import './ProfileInfoCard.css';
import UserService from '../../Services/UserService';
import axios from 'axios';
import cogoToast from 'cogo-toast';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default class ProfileInfoCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalDeleteOpen: false,
            isModalEditOpen: false,
            redirect: false,
            loggedUser: '',
            formData: {
                first_name: '',
                last_name: '',
                username: '',
                email: '',
                password: ''
            }
        };
        this.userService = new UserService();
        this.currentUser = this.userService.getUserFromStorage();
    }

    openDeleteModal = () => this.setState({ isModalDeleteOpen: true });
    closeDeleteModal = () => this.setState({ isModalDeleteOpen: false });

    deleteLoggedInUser = () => {
        console.log(this.userService.getUserIdFromStorage());
        axios
            .delete(
                API_BASE_URL +
                    `/users/${this.userService.getUserIdFromStorage()}`,
                { headers: { 'Content-Type': 'application/json' } }
            )
            .then(res => {
                console.log(res);
                cogoToast.success('User deleted!', {
                    hideAfter: 4,
                    position: 'top-center',
                    heading: 'Welcome!',
                });
            })
            .catch(err => {
                console.log(err);
            });
        this.userService.emptyLocalStorage();
        window.location.href = '/';
    };

    openEditModal = () => {
        axios.get(`${API_BASE_URL}users/${this.userService.getUserIdFromStorage()}`)
        .then((res) => {
            const user = res.data;
            console.log(user);
            this.setState({formData: {
                first_name: user.first_name,
                last_name: user.last_name,
                username: user.username,
                email: user.email,
                password: user.password,
            }
            })
        })
        this.setState({ isModalEditOpen: true });
    }
    closeEditModal = () => this.setState({ isModalEditOpen: false });

    saveModifications = () => {
        axios.put(`${API_BASE_URL}users/${this.userService.getUserIdFromStorage()}`, {
                "first_name":this.state.formData.first_name,
                "last_name":this.state.formData.last_name,
                "username":this.state.formData.username,
                "email":this.state.formData.email,
                'password':this.state.formData.password
        }, { headers: { 'Content-Type': 'application/json' } })

        window.location.reload();
        this.setState({ isModalEditOpen: false });
    }

    componentDidMount() {
        axios.get(`${API_BASE_URL}users/${this.userService.getUserIdFromStorage()}`)
        .then((res) => {
            this.currentUser = res.data;
            this.setState({loggedUser: res.data});
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.formData !== this.state.formData) {
            axios.get(`${API_BASE_URL}users/${this.userService.getUserIdFromStorage()}`)
            .then((res) => {
                this.currentUser = res.data;
                this.setState({loggedUser: res.data});
            })
        }
    }

    render() {
        return (
            <div className="infoCard-container">
                <Card className="profile-card">
                    <Card.Header className="card-header">
                        My Information
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>First Name</Card.Title>
                        <Card.Text className="profile-card-text">
                            {this.state.loggedUser.first_name}
                        </Card.Text>

                        <Card.Title>Last Name</Card.Title>
                        <Card.Text className="profile-card-text">
                            {this.state.loggedUser.last_name}
                        </Card.Text>

                        <Card.Title>Username</Card.Title>
                        <Card.Text className="profile-card-text">
                            {this.state.loggedUser.username}
                        </Card.Text>

                        <Card.Title>Email</Card.Title>
                        <Card.Text className="profile-card-text">
                            {this.state.loggedUser.email}
                        </Card.Text>

                        <Card.Title>Password</Card.Title>
                        <Card.Text className="profile-card-text">
                            You can manage your password by pressing the "Edit
                            profile" button.
                        </Card.Text>

                        <Button
                            variant="primary"
                            className="profile-card-btn"
                            onClick={this.openEditModal}
                        >
                            Edit profile
                        </Button>
                        <Modal
                            aria-labelledby="contained-modal-title-vcenter"
                            size="lg"
                            centered
                            show={this.state.isModalEditOpen}
                            onHide={this.closeEditModal}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Edit profile</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h5>
                                    Here you may edit your profile information.
                                </h5>

                                <Form>
                                    <FormGroup controlId="profile-first-name">
                                        <Form.Label>Your first name</Form.Label>
                                        <Form.Control 
                                            value={this.state.formData.first_name}
                                            onChange={e => 
                                                this.setState(prevState => ({
                                                    formData: {
                                                        ...prevState.formData,
                                                        first_name: e.target.value,
                                                    },
                                                }))
                                            }
                                            type="text"
                                            placeholder="Enter first name"
                                            ></Form.Control>
                                    </FormGroup>
                                    <FormGroup controlId="profile-last-name">
                                        <Form.Label>Your last name</Form.Label>
                                        <Form.Control 
                                            value={this.state.formData.last_name}
                                            onChange={e => 
                                                this.setState(prevState => ({
                                                    formData: {
                                                        ...prevState.formData,
                                                        last_name: e.target.value,
                                                    },
                                                }))
                                            }
                                            type="text"
                                            placeholder="Enter last name"
                                            ></Form.Control>
                                    </FormGroup>
                                    <FormGroup controlId="profile-username">
                                        <Form.Label>Your username</Form.Label>
                                        <Form.Control 
                                            value={this.state.formData.username}
                                            onChange={e => 
                                                this.setState(prevState => ({
                                                    formData: {
                                                        ...prevState.formData,
                                                        username: e.target.value,
                                                    },
                                                }))
                                            }
                                            type="text"
                                            placeholder="Enter username"
                                            ></Form.Control>
                                    </FormGroup>
                                    <FormGroup controlId="profile-email">
                                        <Form.Label>Your email</Form.Label>
                                        <Form.Control 
                                            value={this.state.formData.email}
                                            onChange={e => 
                                                this.setState(prevState => ({
                                                    formData: {
                                                        ...prevState.formData,
                                                        email: e.target.value,
                                                    },
                                                }))
                                            }
                                            type="text"
                                            placeholder="Enter email"
                                            ></Form.Control>
                                    </FormGroup>
                                    <FormGroup controlId="profile-password">
                                        <Form.Label>Your password</Form.Label>
                                        <Form.Control 
                                            value={this.state.formData.password}
                                            onChange={e => 
                                                this.setState(prevState => ({
                                                    formData: {
                                                        ...prevState.formData,
                                                        password: e.target.value,
                                                    },
                                                }))
                                            }
                                            type="password"
                                            placeholder="Enter password"
                                            ></Form.Control>
                                    </FormGroup>
                                </Form>

                                <Button
                                    variant="primary"
                                    className="btn-edit-profile"
                                    onClick={this.saveModifications}
                                >
                                    Save modifications
                                </Button>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button
                                    variant="secondary"
                                    onClick={this.closeEditModal}
                                >
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>

                        <Button
                            variant="primary"
                            className="profile-card-btn"
                            onClick={this.openDeleteModal}
                        >
                            Delete your profile
                        </Button>
                        <Modal
                            aria-labelledby="contained-modal-title-vcenter"
                            dialogClassName="modal-120w"
                            centered
                            show={this.state.isModalDeleteOpen}
                            onHide={this.closeDeleteModal}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Delete profile</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h5>
                                    Are you sure that you want to delete your
                                    profile?
                                </h5>
                                <Button
                                    variant="primary"
                                    className="btn-delete-profile"
                                    onClick={this.deleteLoggedInUser}
                                >
                                    Delete profile
                                </Button>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button
                                    variant="secondary"
                                    onClick={this.closeDeleteModal}
                                >
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
