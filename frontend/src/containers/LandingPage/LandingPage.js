import React from 'react';
import { Button } from 'react-bootstrap';
import './LandingPage.css';
import UserService from '../../Services/UserService'


export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.userService = new UserService();
    }

    componentDidMount() {
        document.querySelector('.navbar').style.display = 'none';
        document.querySelector('.footer').style.display = 'none';
    }

    componentWillUnmount() {
        document.querySelector('.navbar').style.display = 'flex';
        document.querySelector('.footer').style.display = 'flex';
    }

    handleEnterAsGuest = () => {
        this.userService.emptyLocalStorage();
    }

    render() {
        return (
            <header className="landingPage-container">
                <div className="hero-textbox">
                    <h1>
                        Find out what people said. <br />
                        Share your experience.
                    </h1>
                    <a className="btn btn-full" href="/login">
                        Log In / Register
                    </a>
                    <a className="btn btn-ghost" href="/home" onClick={() => this.handleEnterAsGuest()}> 
                        Guest
                    </a>
                </div>
            </header>
        );
    }
}
