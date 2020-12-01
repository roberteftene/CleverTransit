import React from 'react'
import "./ReviewsPage.css"
import MotMenu from "../../components/MotMenu/MotMenu"

export default class ReviewsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <>

            <div className="container">
                <h1>Reviews Page / MOT</h1>
                <MotMenu/>

            </div>

        </>
    }
}