import React from "react"
import {Jumbotron, Container } from "react-bootstrap"
import AboutUsCard from "../../components/AboutUsCard/AboutUsCard"
import './AboutUsPage.css'

const students = [
    {
        id: 1,
        img: '/Students_Images/1.JPG',
        name: 'Robert Eftene',
        github: 'https://github.com/robertEftene',
        description: "Ambious IT Student and Web Developer"
    },
    {
        id: 2,
        img: './Students_Images/2.JPG',
        name: 'Diana Crisan',
        github: 'https://github.com/dianacrisan',
        description: "Ambious IT Student and Smoto's Assistant"
    },
    {
        id: 3,
        img: '/Students_Images/3.JPG',
        name: 'Nicolae Avram',
        github: 'https://github.com/nickavr',
        description: "Ambious IT Student and Low Level Programming Fanatic"
    },
    {
        id: 4,
        img: '/Students_Images/4.JPG',
        name: 'Ciprian Ciuc',
        github: 'https://github.com/cirpianciuc',
        description: "Ambious IT Student and Cybersecurity Enthusiast"
    }
];


export default class AboutUsPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <section className="aboutUsPage-jumbotron">
                    <Jumbotron fluid>
                        <Container>
                            <h1>We are SmotoCode</h1>
                            <p className="our-description">
                                Our Chief Executive Officer is a toy seal.
                            </p>
                        </Container>
                    </Jumbotron>
                </section>
                <section className="aboutUsPage-container">
                    {students.map(student => {
                        // return <Book key={book.id} book={book}></Book>;
                        // return <Book key={book.id} {...book}></Book>; //spread operator
                        return (
                            <AboutUsCard className="aboutus-card" 
                                key={student.id} 
                                img={student.img} 
                                name={student.name} 
                                github={student.github} 
                                description={student.description}
                            ></AboutUsCard>
                        );
                    })}
                </section>
                <br/>
                <br/>
            </div>
        )
    }

}

