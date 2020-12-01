import React from 'react'
import "./MotMenu.css"
import Nav from 'react-bootstrap/Nav'

export default class MotMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <> 
        
            <div className="container">

               <Nav className="flex-column">

                    <Nav.Link href="#">Bus</Nav.Link>
                    <Nav.Link href="#">Tram</Nav.Link>
                    <Nav.Link href="#">Subway</Nav.Link>
                    <Nav.Link href="#">All</Nav.Link>

               </Nav>

            </div>

        </>
    }
}