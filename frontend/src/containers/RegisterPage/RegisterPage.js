// fname, lname, username, email, password
import React, { Component } from 'react';
import './RegisterPage.css';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        document.querySelector('.navbar').style.display = 'none';
        document.querySelector('.footer').style.display = 'none';
    }

    componentWillUnmount() {
        document.querySelector('.navbar').style.display = 'flex';
        document.querySelector('.footer').style.display = 'flex';
    }

    render() {
        return (
            <section className="section-input">
                <form className="register-form">
                    <h3>Register</h3>

                    <div className="form-group">
                        <label>First name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter first name"
                        />
                    </div>

                    <div className="form-group">
                        <label>Last name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter last name"
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Pick an username"
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn-signin btn-dark btn-lg btn-block"
                    >
                        Register now
                    </button>
                </form>
            </section>
        );
    }
}
