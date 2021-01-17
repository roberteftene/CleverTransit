import React from 'react';
import './MotMenu.css';
import Nav from 'react-bootstrap/Nav';
import { Form, FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import UserService from '../../Services/UserService';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
export default class MotMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            methodsOfTransport: [],
        };
        this.userService = new UserService();
    }
    componentDidMount() {
        axios.get(API_BASE_URL + 'methods').then(result => {
            const methodsOfTransport = result.data;
            this.setState({ methodsOfTransport });
        });
    }

    onMotSelected(methodId) {
        this.props.onMotSelected(methodId);
    }

    onChangeSearch(content) {
        this.props.searchContent(content);
    }

    render() {
        return (
            <>
                <div className="container">
                    <Nav
                        defaultActiveKey="/home"
                        className="flex-column mot-menu"
                    >
                        <Nav.Item>
                            <Form>
                                <FormControl
                                    type="text"
                                    placeholder="Search reviews"
                                    className="mr-sm-2"
                                    onChange={e =>
                                        this.onChangeSearch(e.target.value)
                                    }
                                />
                            </Form>
                            {this.state.methodsOfTransport.map(method => (
                                <Nav.Link
                                    eventKey={`link-${method.id}`}
                                    key={method.id}
                                    className="mot-item"
                                    onClick={() =>
                                        this.onMotSelected(method.id)
                                    }
                                    style={
                                        method.name.toString().toLowerCase() ===
                                            'my reviews' &&
                                        !this.userService.userIsLogged()
                                            ? { display: 'none' }
                                            : {}
                                    }
                                >
                                    <i
                                        className={`fas fa-${method.name
                                            .toString()
                                            .toLowerCase()}`}
                                    ></i>
                                    {method.name}
                                </Nav.Link>
                            ))}
                        </Nav.Item>
                    </Nav>
                </div>
            </>
        );
    }
}
