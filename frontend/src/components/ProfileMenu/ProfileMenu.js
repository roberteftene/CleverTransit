import React from "react";
import "./ProfileMenu.css";
import Nav from "react-bootstrap/Nav";
import { Redirect } from 'react-router-dom';

export default class ProfileMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            isReviews: false,
        };
    }

    setRedirect = () => {
        // here we may need to delete active user details ???
        this.setState({
          redirect: true
        })
    }
    
    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/' />
        }
    }

    onOptionSelected(isReviews) {
        this.props.onOptionSelected(isReviews);
    }

    render() {
        return (
            <>
                <div className="container" >
                    <Nav defaultActiveKey="/home" className="flex-column options-menu">
                        <Nav.Item>
                            {this.renderRedirect()}
                            <Nav.Link className="option-item" onClick={() => this.onOptionSelected(false)}>My Information</Nav.Link>                    
                            <Nav.Link className="option-item" onClick={() => this.onOptionSelected(true)}>My Reviews</Nav.Link>                    
                            <Nav.Link className="option-item" onClick={this.setRedirect}>Log Out</Nav.Link> 
                        </Nav.Item>
                    </Nav>
                </div>
            </>
        );
    }
}
