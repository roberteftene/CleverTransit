import React from "react"
import { Jumbotron, Button } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import './NotFoundPage.css'
import Smoto from './smoto.jpg'

export default class ProfilePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    componentDidMount() {
        document.querySelector('.navbar').style.display = 'none';
        document.querySelector('.footer').style.display = 'none';
    }

    componentWillUnmount() {
        document.querySelector('.navbar').style.display = 'flex';
        document.querySelector('.footer').style.display = 'flex';
    }

    nextPath(path) {
        this.props.history.push(path);
    }

    render() {
        return <>
            <Jumbotron className="vertical-align">
                <h1>Sorry</h1>
                <p className="error-message">
                    Smoto could not find the desired page.
                </p>
                <img src={Smoto} className="image-smoto"></img>
                <br />
                <p>
                    <Button variant="primary" onClick={() => {this.nextPath('/')}}>Back to CleverTransit</Button>
                </p>
            </Jumbotron>
        </>
    }

}