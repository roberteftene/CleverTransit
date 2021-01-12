import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "./LineCard.css"
import Modal from 'react-bootstrap/Modal' 
import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/esm/FormGroup'
import axios from "axios";
import ReviewCard from '../ReviewCard/ReviewCard'
export default class LineCard extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            showModal:false,
            lineOpened:0,
            formData: {
                review_title:"",
                start_point:"",
                end_point:"",
                leaving_hour:"",
                duration:"",
                congestion_level:0,
                observations:"",
                satisfaction_level:0,
                review_noLikes: 0,
                transportLineId:0,
                userId:0
            },
            reviews:[],
            showBtnLess:false
        }
    }

    handleViewReviewsBtn = () => {
        this.setState({viewReviewsIsClicked: true});
    }

    handleClose = () => 
    this.setState({showModal:false});
    
    handleShow = (lineId) => this.setState({showModal:true,lineOpened:lineId});

    handleAddReview = () => {
        axios.post("http://localhost:3000/reviews",{
            "review_title":this.state.formData.review_title,
            "start_point":this.state.formData.start_point,
            "end_point": this.state.formData.end_point,
            "leaving_hour":this.state.formData.leaving_hour,
            "duration":this.state.formData.duration,
            "congestion_level":this.state.formData.congestion_level,
            "observations":this.state.formData.observations,
            "satisfaction_level":this.state.formData.satisfaction_level,
            "review_noLikes":this.state.formData.review_noLikes,
            "transportLineId":this.state.lineOpened,
            "userId":1
        }, {headers:{"Content-Type" : "application/json"}})
        .then((res)=> {console.log(res)})
            .catch((err) => {console.log(err)})

        this.setState({showModal:false, formData: {
            review_title:"",
            start_point:"",
            end_point:"",
            leaving_hour:"",
            duration:"",
            congestion_level:0,
            observations:"",
            satisfaction_level:0,
            review_noLikes:0,
            transportLineId:0,
            userId:0
        }});
    
    }

    componentDidUpdate(prevProps,prevState) {
        if(prevState.lineOpened !== this.state.lineOpened) {
            axios.get(`http://localhost:3000/lines/${this.state.lineOpened}/reviews`).then((res) => {
                console.log(res.data)
                const reviewsData = res.data;
                this.setState({reviews:reviewsData});
                if(reviewsData.length > 0) {
                    this.setState({showBtnLess:true})
                } else {
                    this.setState({showBtnLess:false})
                }
            } )
        }
    }

    onViewReviewsSelected(lineId) {
        this.props.onViewReviewsSelected(lineId);
        this.setState({lineOpened:lineId});
    }

    onShowLessClicked() {
        this.setState({reviews:[],showBtnLess:false,lineOpened:0});
    }

    render() {
        return(

            <div className="container">

            <Modal
            size="lg"
            show={this.state.showModal}
            onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a review</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <Form >
                    <FormGroup controlId="reviewTitle">
                        <Form.Label>Enter a title for your review</Form.Label>
                        <Form.Text>E.G "Traffic jam with bus 125"</Form.Text>
                        <Form.Control  onChange={(e) => this.setState(prevState => ({formData: {...prevState.formData,review_title: e.target.value}}))} type="text" placeholder="Enter title"></Form.Control>
                    </FormGroup>
                    <FormGroup controlId="routePoints">
                        <Form.Label>Start Point</Form.Label>
                        <Form.Text>E.G Started the trip for Aurel Vlaicu subway station. Therefore, enter "Aurel Vlaicu"</Form.Text>
                        <Form.Control onChange={(e) => this.setState(prevState => ({formData: {...prevState.formData,start_point: e.target.value}}))}  type="text" placeholder="Enter starting point"></Form.Control>
                        <br/>
                        <Form.Label>End Point</Form.Label>
                        <Form.Text>E.G Ended the trip at Piata Unirii subway station. Therefore, enter "Piata Unirii"</Form.Text>
                        <Form.Control  onChange={(e) => this.setState(prevState => ({formData: {...prevState.formData,end_point: e.target.value}}))} type="text" placeholder="Enter ending point"></Form.Control>
                    </FormGroup>

                    <FormGroup controlId="leavingHour">
                        <Form.Label>Leaving hour</Form.Label>
                        <Form.Text>E.G The subway left Aurel Vlaicu station at 14:15. Therefore, enter 14:15</Form.Text>
                        <Form.Control  onChange={(e) => this.setState(prevState => ({formData: {...prevState.formData,leaving_hour: e.target.value}}))} type="time" placeholder="Enter leaving hour"></Form.Control>
                    </FormGroup>

                    <FormGroup controlId="duration">
                        <Form.Label>Duration</Form.Label>
                        <Form.Text>E.G The trip from Aurel Vlaicu to Piata Unirii took 35 minutes. Therefore, enter 35</Form.Text>
                        <Form.Control  onChange={(e) => this.setState(prevState => ({formData: {...prevState.formData,duration: e.target.value}}))} type="number" placeholder="Enter duration"></Form.Control>
                    </FormGroup>

                    <FormGroup controlId="congestionLevel">
                        <Form.Label>Congestion Level</Form.Label>
                        <Form.Text>1 - Free | 2 - Ok | 3 - Moderate | 4 - Full | 5 - Exagerate</Form.Text>
                        <Form.Control  onChange={(e) => this.setState(prevState => ({formData: {...prevState.formData,congestion_level: e.target.value}}))} as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Form.Control>
                    </FormGroup>

                    <FormGroup controlId="satisfactionLevel">
                    <Form.Label>Satisfaction Level</Form.Label>
                        <Form.Text>1 - Very low | 2 - Low  | 3 - Moderate | 4 - Good | 5 - Very good</Form.Text>
                        <Form.Control onChange={(e) => this.setState(prevState => ({formData: {...prevState.formData,satisfaction_level: e.target.value}}))}  as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Form.Control>
                    </FormGroup>

                    <FormGroup controlId="observation">
                        <Form.Label>Observations</Form.Label>
                        <Form.Text> Enter below any observations regarding your trip</Form.Text>
                        <Form.Control onChange={(e) => this.setState(prevState => ({formData: {...prevState.formData,observations: e.target.value}}))}  as="textarea" rows={3}/>
                    </FormGroup>
                </Form>


                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={() => this.handleClose()}>Close</Button>
                <Button variant="primary" onClick={() => this.handleAddReview()}>Add review</Button>
                </Modal.Footer>

            </Modal>


            {this.props.linesByMot.map(line => 

            
                <Card key = {line.id} className="linecard">
                    <Card.Header className="card-header">{line.lineName} Line</Card.Header>
                    <Card.Body>
                        <Card.Title>{line.route}</Card.Title>
                        <Card.Text className="card-text">
                            {line.lineDescription}
                        </Card.Text>
                        <Button variant="primary" className="lineCard-btn" onClick={() => this.handleShow(line.id)}>Add review</Button>
                        <Button variant="primary" className="lineCard-btn" onClick={() => this.onViewReviewsSelected(line.id)}>View reviews</Button>
                        {
                            line.id === this.state.lineOpened &&
                             (<>
                             <ReviewCard reviews={this.state.reviews}></ReviewCard>
                            <Button variant="primary" className={`lineCard-btn ${this.state.showBtnLess ?  'showBtn':'disableBtn'}`} onClick={() => this.onShowLessClicked()}>Show less</Button>
                                </>)
                        }

                        
                    </Card.Body>
                </Card>
            )}
            </div>


        );
    }
}
