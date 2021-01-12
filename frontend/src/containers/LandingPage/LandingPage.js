import React from 'react';
import { Button } from 'react-bootstrap';
import './LandingPage.css';

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        document.querySelector('.navbar').style.display = 'none';
    }

    componentWillUnmount() {
        document.querySelector('.navbar').style.display = 'flex';
    }

    render() {
        return (
            <header className="landingPage-container">
                <div className="hero-textbox">
                    <h1>
                        Find out what people said. <br />
                        Share your experience.
                    </h1>
                    <a className="btn btn-full" href="#">
                        Log In
                    </a>
                    <a className="btn btn-ghost" href="/home">
                        Guest
                    </a>
                </div>
            </header>
        );
    }
}
