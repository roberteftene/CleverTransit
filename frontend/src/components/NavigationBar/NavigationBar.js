import React from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import './NavigationBar.css';
import UserService from '../../Services/UserService';

export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isUserLogged: true
        };
        this.userService = new UserService();
    }

    componentDidMount() {
        const isUser = this.userService.checkLoggedUser();
        this.setState({isUserLogged: isUser})
    }
    

    componentDidUpdate(prevProps, prevState) {
        const isUser = this.userService.checkLoggedUser();
        if(prevState.isUserLogged !== this.state.isUserLogged) {
            this.setState({isUserLogged: isUser});
        }
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
                            <Nav.Link href="/reviews">Reviews</Nav.Link>
                        </Nav.Item>
                        {
                            this.state.isUserLogged === true && (
                                <>
                                <Nav.Item>
                                    <Nav.Link href="/profile">Profile
                                </Nav.Link>
                                </Nav.Item>
                                </>
                            )
                        }

                        <Nav.Item>
                            <Nav.Link href="/aboutus">About Us</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
