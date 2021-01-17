import React from 'react'
import Card from 'react-bootstrap/Card'
import ProgressBar from 'react-bootstrap/ProgressBar'
import './ReviewCard.css'
import Button from 'react-bootstrap/Button'
import axios from "axios";
import UserService from '../../Services/UserService'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import cogoToast from 'cogo-toast';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL
export default class ReviewInfo extends React.Component {
    constructor(props){
        super(props);
        this.state={
            noLikes:this.props.reviewLikes,
            userLoggedId: 0,
            showModal: false,
            reviewSelectedId:0,
            showEditModal:false,
            formData : {
                review_title: '',
                start_point: '',
                end_point: '',
                leaving_hour: '',
                duration: 0,
                congestion_level: 1,
                observations: '',
                satisfaction_level: 1,
                review_noLikes: 0,
                transportLineId: 0,
                userId: 0
            }
            

        }
        this.userService = new UserService();
    }

    componentDidMount() {
        if(this.userService !== null) {
        this.setState({userLoggedId:this.userService.getUserIdFromStorage()})
        } 
    }

    handleLikeClick(reviewId) {
        this.setState(prev => ({noLikes: prev.noLikes + 1}))
        let reviewById = [];
        axios.get(`${API_BASE_URL}reviews/${reviewId}`)
        .then(res => {
            reviewById = res.data;
            console.log(reviewById);
            axios.put(`${API_BASE_URL}reviews/${reviewId}`, {
                "review_title":reviewById.review_title,
                "start_point":reviewById.start_point,
                "end_point":reviewById.end_point,
                "leaving_hour":reviewById.leaving_hour,
                'duration':reviewById.duration,
                'congestion_level':reviewById.congestion_level,
                'observations':reviewById.observations,
                'satisfaction_level':reviewById.satisfaction_level,
                'review_noLikes':reviewById.review_noLikes + 1,
                'transportLineId':reviewById.transportLineId,
                'userId':reviewById.userId
            })
        })
    }

  
    handleEditReview = () => {
        axios.put(`${API_BASE_URL}reviews/${this.state.reviewSelectedId}`, {
                "review_title":this.state.formData.review_title,
                "start_point":this.state.formData.start_point,
                "end_point":this.state.formData.end_point,
                "leaving_hour":this.state.formData.leaving_hour,
                'duration':this.state.formData.duration,
                'congestion_level':this.state.formData.congestion_level,
                'observations':this.state.formData.observations,
                'satisfaction_level':this.state.formData.satisfaction_level,
                'review_noLikes':this.state.formData.review_noLikes,
                'transportLineId':this.state.formData.transportLineId,
                'userId':this.state.formData.userId
        }, { headers: { 'Content-Type': 'application/json' } })
        window.location.reload();
        this.setState({showEditModal:false,reviewSelectedId:0});
    }

    handleDeleteReview = () => {
        axios.delete(`${API_BASE_URL}reviews/${this.state.reviewSelectedId}`);
        window.location.reload()
        this.setState({showModal:false,reviewSelectedId:0});
        
    }   

    handleClose = () => {
        this.setState({showModal:false,showEditModal:false})
    }
    handleOpenDeleteModal = (reviewId) => {
        this.setState({showModal:true,reviewSelectedId:reviewId})
    }
    handleOpenEditModal = (reviewId) => {
        axios.get(`${API_BASE_URL}reviews/${reviewId}`)
        .then((res) => {
            const reviewById = res.data;
            console.log(reviewById);
            this.setState({formData: {
                review_title:reviewById.review_title,
                start_point: reviewById.start_point,
                end_point: reviewById.end_point,
                leaving_hour: reviewById.leaving_hour,
                duration: reviewById.duration,
                congestion_level: reviewById.congestion_level,
                observations: reviewById.observations,
                satisfaction_level: reviewById.satisfaction_level,
                review_noLikes: reviewById.review_noLikes,
                transportLineId: reviewById.transportLineId,
                userId: reviewById.userId
            }
            })
        })
        this.setState({showEditModal:true,reviewSelectedId:reviewId});

    }

    render() {
        return(
        <>
                <Modal
                    size="lg"
                    show={this.state.showEditModal}
                    onHide={this.handleClose}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add a review</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <FormGroup controlId="reviewTitle">
                                <Form.Label>
                                    Enter a title for your review
                                </Form.Label>
                                <Form.Text>
                                    E.G "Traffic jam with bus 125"
                                </Form.Text>
                                <Form.Control
                                    value={this.state.formData.review_title}
                                    onChange={e =>
                                        this.setState(prevState => ({
                                            formData: {
                                                ...prevState.formData,
                                                review_title: e.target.value,
                                            },
                                        }))
                                    }
                                    type="text"
                                    placeholder="Enter title"
                                ></Form.Control>
                            </FormGroup>
                            <FormGroup controlId="routePoints">
                                <Form.Label>Start Point</Form.Label>
                                <Form.Text>
                                    E.G Started the trip for Aurel Vlaicu subway
                                    station. Therefore, enter "Aurel Vlaicu"
                                </Form.Text>
                                <Form.Control
                                    value={this.state.formData.start_point}
                                    onChange={e =>
                                        this.setState(prevState => ({
                                            formData: {
                                                ...prevState.formData,
                                                start_point: e.target.value,
                                            },
                                        }))
                                    }
                                    type="text"
                                    placeholder="Enter starting point"
                                ></Form.Control>
                                <br />
                                <Form.Label>End Point</Form.Label>
                                <Form.Text>
                                    E.G Ended the trip at Piata Unirii subway
                                    station. Therefore, enter "Piata Unirii"
                                </Form.Text>
                                <Form.Control
                                    value={this.state.formData.end_point}
                                    onChange={e =>
                                        this.setState(prevState => ({
                                            formData: {
                                                ...prevState.formData,
                                                end_point: e.target.value,
                                            },
                                        }))
                                    }
                                    type="text"
                                    placeholder="Enter ending point"
                                ></Form.Control>
                            </FormGroup>

                            <FormGroup controlId="leavingHour">
                                <Form.Label>Leaving hour</Form.Label>
                                <Form.Text>
                                    E.G The subway left Aurel Vlaicu station at
                                    14:15. Therefore, enter 14:15
                                </Form.Text>
                                <Form.Control
                                    value={this.state.formData.leaving_hour}
                                    onChange={e =>
                                        this.setState(prevState => ({
                                            formData: {
                                                ...prevState.formData,
                                                leaving_hour: e.target.value,
                                            },
                                        }))
                                    }
                                    type="time"
                                    placeholder="Enter leaving hour"
                                ></Form.Control>
                            </FormGroup>

                            <FormGroup controlId="duration">
                                <Form.Label>Duration</Form.Label>
                                <Form.Text>
                                    E.G The trip from Aurel Vlaicu to Piata
                                    Unirii took 35 minutes. Therefore, enter 35
                                </Form.Text>
                                <Form.Control
                                    value={this.state.formData.duration}
                                    onChange={e =>
                                        this.setState(prevState => ({
                                            formData: {
                                                ...prevState.formData,
                                                duration: e.target.value,
                                            },
                                        }))
                                    }
                                    type="number"
                                    placeholder="Enter duration"
                                ></Form.Control>
                            </FormGroup>

                            <FormGroup controlId="congestionLevel">
                                <Form.Label>Congestion Level</Form.Label>
                                <Form.Text>
                                    1 - Free | 2 - Ok | 3 - Moderate | 4 - Full
                                    | 5 - Exagerate
                                </Form.Text>
                                <Form.Control
                                    value={this.state.formData.congestion_level}
                                    onChange={e =>
                                        this.setState(prevState => ({
                                            formData: {
                                                ...prevState.formData,
                                                congestion_level:
                                                    e.target.value,
                                            },
                                        }))
                                    }
                                    as="select"
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </FormGroup>

                            <FormGroup controlId="satisfactionLevel">
                                <Form.Label>Satisfaction Level</Form.Label>
                                <Form.Text>
                                    1 - Very low | 2 - Low | 3 - Moderate | 4 -
                                    Good | 5 - Very good
                                </Form.Text>
                                <Form.Control
                                    value={this.state.formData.satisfaction_level}
                                    onChange={e =>
                                        this.setState(prevState => ({
                                            formData: {
                                                ...prevState.formData,
                                                satisfaction_level:
                                                    e.target.value,
                                            },
                                        }))
                                    }
                                    as="select"
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </FormGroup>

                            <FormGroup controlId="observation">
                                <Form.Label>Observations</Form.Label>
                                <Form.Text>
                                    {' '}
                                    Enter below any observations regarding your
                                    trip
                                </Form.Text>
                                <Form.Control
                                    value={this.state.formData.observations}
                                    onChange={e =>
                                        this.setState(prevState => ({
                                            formData: {
                                                ...prevState.formData,
                                                observations: e.target.value,
                                            },
                                        }))
                                    }
                                    as="textarea"
                                    rows={3}
                                />
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="secondary"
                            onClick={() => this.handleClose()}
                        >
                            Close
                        </Button>
                        <Button
                            variant="primary"
                            onClick={() => this.handleEditReview()}
                        >
                            Edit review
                        </Button>
                    </Modal.Footer>
                </Modal>


        <Modal show={this.state.showModal} onHide={() => this.handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Review</Modal.Title>
        </Modal.Header>
         <Modal.Body>You are about to delete this review, are you sure?</Modal.Body>
            <Modal.Footer>
          <Button variant="secondary" onClick={()=>this.handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>this.handleDeleteReview()}>
            Delete Review
          </Button>
        </Modal.Footer>
      </Modal>
         <Card key ={this.props.reviewId}>
                <Card.Body>
                <Card.Title>{this.props.reviewTitle}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{this.props.reviewStartPoint} - {this.props.reviewEndPoint}</Card.Subtitle>
                <Card.Text>{this.props.reviewSmileyFaces}  Likes: {this.state.noLikes}</Card.Text>
                <Card.Text>Leaving Hour: {this.props.reviewLeavingHour} Duration: {this.props.reviewDuration} min</Card.Text>
                <Card.Text className="cardText-noMarginBottom">Congestion Level</Card.Text>
                <ProgressBar now={this.props.reviewCongestion * 20} label={this.props.reviewCongestion * 20}></ProgressBar>
                <Card.Text>{this.props.reviewObservations}</Card.Text>
                <Button className="likeBtn" variant="outline-primary" onClick={()=>this.handleLikeClick(this.props.reviewId)} ><i className="fas fa-thumbs-up like"></i></Button>
                {
                    this.userService.getUserIdFromStorage() !== null && this.userService.getUserIdFromStorage()===this.props.reviewUserId  &&  (
                        <>
                            <Button className="likeBtn" variant="primary" style={{color:'#fff'}} onClick={() => this.handleOpenEditModal(this.props.reviewId)}>Edit</Button>
                            <Button className="likeBtn" variant="primary" style={{color:'#fff'}} onClick={() => this.handleOpenDeleteModal(this.props.reviewId)}>Delete</Button>

                        </>
                    )
                }
                </Card.Body>
            </Card>
        </>
        )
    }
}