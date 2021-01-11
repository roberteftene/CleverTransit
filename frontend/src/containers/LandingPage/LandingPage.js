import React from 'react';
import { Button } from 'react-bootstrap';
import './LandingPage.css';

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <header className="landingPage-container">
                <div className="hero-textbox">
                    <h1>
                        Find out what people said. <br />
                        Share your experience.
                    </h1>
                    <a class="btn btn-full" href="#">
                        Log In
                    </a>
                    <a class="btn btn-ghost" href="/home">
                        Guest
                    </a>
                </div>
            </header>
        );
    }
}
