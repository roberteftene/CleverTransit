import React from "react";
import "./ProfileMenu.css";
import Nav from "react-bootstrap/Nav";
import { Form, FormControl} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import axios from "axios";


export default class ProfileMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>
                <div className="container" >
                    <Nav defaultActiveKey="/home" className="flex-column options-menu">
                        <Nav.Item>
                            <Nav.Link className="option-item">My Information</Nav.Link>                    
                            <Nav.Link className="option-item">My Reviews</Nav.Link>                    
                            <Nav.Link className="option-item">Log Out</Nav.Link>                    
                        </Nav.Item>
                    </Nav>
                </div>
            </>
        );
    }
}
