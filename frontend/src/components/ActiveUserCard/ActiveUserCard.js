import React from 'react'
import Card from 'react-bootstrap/Card'
import './ActiveUserCard.css'
import Row from 'react-bootstrap/Row'

export default class ActiveUserCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

   

    render() {

    return (
        <Row className={"d-flex justify-content-around"}>
        <Card  style={{ width: '19rem',border:'none', backgroundColor:'#464442', margin:'50px' }}>
            <Card.Img className="avatarImage" variant="top" src={`./userAvatars/${this.props.activeUsersProfileImages}.png`}/>
            <Card.Body className="cardUser-body">
           <Card.Title>{this.props.userFirstName}  {this.props.userLastName}</Card.Title>
           <Card.Subtitle className="mb-2 text-muted">Number of reviews added: <b style={{color:'#ff914a'}}>{this.props.reviews.length}</b></Card.Subtitle>
           <Card.Subtitle className="mb-2 text-muted">Number of likes: <b style={{color:'#ff914a'}}>{this.props.noLikes}</b></Card.Subtitle>
           </Card.Body>
        </Card>
        </Row>
    );
    }

}

