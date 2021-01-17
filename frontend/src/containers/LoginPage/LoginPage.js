import React, { Component } from 'react';
import axios from 'axios';
import UserService from '../../Services/UserService';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import cogoToast from 'cogo-toast';
import './LoginPage.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            userOk: false,
        };
        this.path = './login';
        this.userService = new UserService();
    }

    componentDidMount() {
        document.querySelector('.navbar').style.display = 'none';
        document.querySelector('.footer').style.display = 'none';
        console.log(this.userService.getUserIdFromStorage());
    }

    componentWillUnmount() {
        document.querySelector('.navbar').style.display = 'flex';
        document.querySelector('.footer').style.display = 'flex';
    }

    handleSignIn = async e => {
        e.preventDefault();
        axios
            .post(
                'http://localhost:3000/users/credentials',
                {
                    email: this.state.email,
                    password: this.state.password,
                },
                { headers: { 'Content-Type': 'application/json' } }
            )
            .then(res => {
                if (!res.data) {
                    cogoToast.warn('User not found :(');
                } else if (res.data) {
                    let user = res.data;
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    cogoToast.success('Login Successful');
                    this.setState({ userOk: true });
                    this.path = '/home';
                }
            })
            .catch(err => {
                console.log(err);
            });
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
                        onClick={e => this.handleSignIn(e)}
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
