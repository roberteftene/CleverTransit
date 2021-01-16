import React, { Component } from 'react';
import axios from 'axios';
import UserService from '../../Services/UserService';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './LoginPage.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.path = './login';
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

    handleSignIn = () => {
        if (
            this.userService.checkUserByCredentials(
                this.state.email,
                this.state.password
            )
        ) {
            this.path = '/home';
            this.userService.getUserByCredentials(
                this.state.email,
                this.state.password
            );
        }
    };

    render() {
        return (
            <section className="section-input">
                <form>
                    <h3>Log in</h3>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            onChange={e => {
                                this.setState({
                                    email: e.target.value.toString(),
                                });
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            onChange={e => {
                                this.setState({
                                    password: e.target.value.toString(),
                                });
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                            />
                            <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                            >
                                Remember me
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn-signin btn-dark btn-lg btn-block"
                        onClick={this.handleSignIn()}
                    >
                        <Link to={this.path}>Sign In</Link>
                    </button>
                    <p className="forgot-password text-right">
                        Forgot{' '}
                        <a className="link-login" href="#">
                            password?
                        </a>
                    </p>
                </form>
                <div className="register">
                    <h3>
                        Not a member?{' '}
                        <a className="link-login" href="/register">
                            Register
                        </a>
                    </h3>
                </div>
            </section>
        );
    }
}
