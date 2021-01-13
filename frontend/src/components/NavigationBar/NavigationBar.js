import React from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import './NavigationBar.css';

export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Navbar expand="lg">
                <Navbar.Brand href="/home" className="brand">
                    CleverTransit
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Item>
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/reviews">
                                Methods of Transport
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/profile">Profile</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link href="/aboutus">About Us</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        );
    }
}
