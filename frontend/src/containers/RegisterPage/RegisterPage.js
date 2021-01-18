// fname, lname, username, email, password
import React, { Component } from 'react';
import axios from 'axios';
import cogoToast from 'cogo-toast';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import UserService from '../../Services/UserService';

import './RegisterPage.css';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            emal: '',
            password: '',
            checkPassword: '',
        };
        this.path = '/register';
    }

    componentDidMount() {
        document.querySelector('.navbar').style.display = 'none';
        document.querySelector('.footer').style.display = 'none';
    }

    componentWillUnmount() {
        document.querySelector('.navbar').style.display = 'flex';
        document.querySelector('.footer').style.display = 'flex';
    }

    checkInputData = () => {
        let checker = true;
        let message = '';

        if (this.state.lastName.length < 3) {
            checker = false;
            message = 'Last name too short.';
        }

        if (this.state.firstName.length < 3) {
            checker = false;
            message = 'First name too short.';
        }
        if (this.state.username.length < 5) {
            checker = false;
            message = 'Username not valid';
        }
        if (this.state.password.length < 5) {
            checker = false;
            message = 'Password too short';
        }
        // if (this.state.password.equal(this.state.checkPassword)) {
        //     checker = false;
        //     message = 'Passwords do not match';
        // }
        return { check: checker, msg: message };
    };
    // router.post('/users',userController.addUser);
    handleAddUser = e => {
        e.preventDefault();
        let checkObj = this.checkInputData();
        console.log(checkObj);
        if (checkObj.check) {
            axios
                .post(
                    API_BASE_URL + 'users',
                    {
                        first_name: this.state.firstName,
                        last_name: this.state.lastName,
                        username: this.state.username,
                        password: this.state.password,
                        email: this.state.email,
                    },
                    { headers: { 'Content-Type': 'application/json' } }
                )
                .then(res => {
                    console.log(res);
                    cogoToast.success('Registered successful', {
                        hideAfter: 4,
                        position: 'top-center',
                        heading: 'Welcome!',
                    });
                    this.props.history.push('/login');
                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            cogoToast.warn(checkObj.msg, {
                hideAfter: 4,
                position: 'top-center',
                heading: 'Oops :)',
            });
        }
    };

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
                            onChange={e => {
                                this.setState({
                                    firstName: e.target.value.toString(),
                                });
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <label>Last name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter last name"
                            onChange={e =>
                                this.setState({
                                    lastName: e.target.value.toString(),
                                })
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                            onChange={e =>
                                this.setState({
                                    email: e.target.value.toString(),
                                })
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Pick an username"
                            onChange={e =>
                                this.setState({
                                    username: e.target.value.toString(),
                                })
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            onChange={e =>
                                this.setState({
                                    password: e.target.value.toString(),
                                })
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label>Re-enter Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            onChange={e =>
                                this.setState({
                                    checkPassword: e.target.value.toString(),
                                })
                            }
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn-signin btn-dark btn-lg btn-block"
                        onClick={e => this.handleAddUser(e)}
                    >
                        Register
                    </button>
                </form>
            </section>
        );
    }
}
