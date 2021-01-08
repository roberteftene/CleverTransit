import React from "react"
import Card from 'react-bootstrap/Card'
import imgWRob from '../../assets/images/DSC_1993.png'


export default class ProfileInfoCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="infoCard-container">

                <Card>
                    <Card.Img variant="top" src={imgWRob}></Card.Img>
                </Card>

            </div>
        );
    }

}