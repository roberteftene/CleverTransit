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
                
            {this.props.linesByMot.map(line => 

                <Card className="linecard">
                    <Card.Header className="card-header">{line.lineName} Line</Card.Header>
                    <Card.Body>
                        <Card.Title>{line.route}</Card.Title>
                        <Card.Text className="card-text">
                            {line.lineDescription}
                        </Card.Text>
                        <Button variant="primary" className="lineCard-btn">Add review</Button>
                        <Button variant="primary" className="lineCard-btn">View reviews</Button>
                    </Card.Body>
                </Card>
            )}
            </div>


        );
    }
}
