import React from 'react'
import Card from 'react-bootstrap/Card'
import './ActiveUserCard.css'
import Row from 'react-bootstrap/Row'

export default class ActiveUserCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
             activeUsersArray:this.props.activeUsers,
             arrayAvatars : ["AvatarMale","AvatarMale2","AvatarFemale"]
        }
    }

    componentDidMount() {
        let index = 0;
        
        this.state.activeUsersArray.map((user)=> {
            user.profileImage = this.state.arrayAvatars[index]
            index++;
        })
    }

    getNoLikes = (userId) => {
        let noLikes = 0;
        this.props.activeUsers.map((activeUser) => {
            if(activeUser.id === userId) {
                for (let index = 0; index < activeUser.reviews.length; index++) {
                    noLikes += activeUser.reviews[index].review_noLikes;
                }
            }
        })
        return noLikes;
    }

    render() {

    return (
        <Row className={"d-flex justify-content-center"}>
        {this.state.activeUsersArray.map((activeUser) => (
        
        <Card key={activeUser.id} style={{ width: '19rem',border:'none', backgroundColor:'#464442' }}>
            <Card.Img className="avatarImage" variant="top" src={`./userAvatars/${activeUser.profileImage}.png`}/>
            <Card.Body className="cardUser-body">
           <Card.Title>{activeUser.first_name}  {activeUser.last_name}</Card.Title>
           <Card.Subtitle className="mb-2 text-muted">Number of reviews added: <b style={{color:'#ff914a'}}>{activeUser.reviews.length}</b></Card.Subtitle>
           <Card.Subtitle className="mb-2 text-muted">Number of likes: <b style={{color:'#ff914a'}}>{this.getNoLikes(activeUser.id)}</b></Card.Subtitle>
           </Card.Body>
        </Card>
        ))}
        </Row>
    );
    }

}

