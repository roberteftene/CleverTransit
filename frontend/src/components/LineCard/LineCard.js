import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "./LineCard.css"

export default class LineCard extends React.Component {
    constructor(props) {
        super(props);
        this.state ={}
    }

    render() {
        return(

            <div className="container">

                <Card>
                    <Card.Header className="card-header">Line 783</Card.Header>
                    <Card.Body>
                        <Card.Title>Valea Olutlui - Piata Presei</Card.Title>
                        <Card.Text className="card-text">
Bus line 105 (Direction: Piața Presei → Valea Oltului) has 33 stops, the first stop at Piața Presei and the last stop at Valea Oltului.

Bus schedule 105 for next week: the program starts at 5:26 and ends at 23:00. Operating days this week: every day.                        </Card.Text>

                        <Button variant="primary" className="lineCard-btn">Add review</Button>
                        <Button variant="primary" className="lineCard-btn">View reviews</Button>
                    </Card.Body>
                </Card>

            </div>


        );
    }
}
