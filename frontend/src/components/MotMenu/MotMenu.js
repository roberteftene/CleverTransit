import React from "react";
import "./MotMenu.css";
import Nav from "react-bootstrap/Nav";
import axios from "axios";


export default class MotMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            methodsOfTransport: []
        };
    }
    componentDidMount() {
        axios.get('http://smotocode.app.webtech-superheroes.net:8080/methods')
            .then(result => {
                const methodsOfTransport = result.data;
                this.setState({ methodsOfTransport })
            })
    }

    onMotSelected(methodId) {
        this.props.onMotSelected(methodId);
    }

    render() {
        return (
            <>
                <div className="container" >
                    <Nav defaultActiveKey="/home" className="flex-column mot-menu">
                        <Nav.Item>
                            {this.state.methodsOfTransport.map(method =>
                                <Nav.Link
                                    eventKey={`link-${method.id}`}
                                    key={method.id}
                                    className="mot-item"
                                    onClick={() => this.onMotSelected(method.id)}                                    >

                                    <i className={`fas fa-${method.name.toString().toLowerCase()}`}></i>{method.name}

                                </Nav.Link>
                            )}
                        </Nav.Item>
                    </Nav>
                </div>
            </>
        );
    }
}
