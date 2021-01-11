import React from "react"
import AboutUsCard from "../../components/AboutUsCard/AboutUsCard"
import './HomePage.css'

//vector obiecte cu proprietati
//in render() folosesc functia de mapare pentru fiecare student 
//proprietate la AboutUsCard

export default class HomePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        return <>
            <div className="homePage-container">
                <AboutUsCard className="aboutuus-card" ></AboutUsCard>
            </div>
        </>
    }

}