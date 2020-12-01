import React from "react";
import "./MotMenu.css";
import Nav from "react-bootstrap/Nav";

export default class MotMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }



    

  render() {
    return (
      <>
        <div className="container">
          <Nav  defaultActiveKey="/home" className="flex-column mot-menu">
            <Nav.Item>
              <Nav.Link href="#" className="mot-item"><i class="fas fa-bus"></i>Bus</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1" className="mot-item"><i class="fas fa-tram"></i>Tram</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" className="mot-item"><i class="fas fa-subway"></i> Subway </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3" className="mot-item"><i class="fas fa-train"></i> Train </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4" className="mot-item"><i class="fas fa-fire"></i> Popular </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-5" className="mot-item"><i class="fas fa-user"></i> My Reviews </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </>
    );
  }
}
