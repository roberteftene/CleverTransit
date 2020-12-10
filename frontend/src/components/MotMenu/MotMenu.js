import React from "react";
import "./MotMenu.css";
import Nav from "react-bootstrap/Nav";

export default class MotMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="container">
          <Nav  defaultActiveKey="/home" className="flex-column mot-menu">
            <Nav.Item>
              { this.props.methods.map(method => 
              <Nav.Link eventKey={`link-${method.id}`} key={method.id} className="mot-item">
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
