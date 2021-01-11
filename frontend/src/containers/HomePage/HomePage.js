import React from "react"
import AboutUsCard from "../../components/AboutUsCard/AboutUsCard"
import './HomePage.css'

//vector obiecte cu proprietati
//in render() folosesc functia de mapare pentru fiecare student 
//proprietate la AboutUsCard

const students = [
    {
        id: 1,
        img: './Students_Images/1.JPG',
        name: 'Diana Crisan',
        github: 'https://github.com/dianacrisan',
        description: "Ambious IT Student Smoto's Assistant"
    },
    {
        id: 2,
        img: '/Students_Images/2.JPG',
        name: 'Robert Eftene',
        github: 'https://github.com/robertEftene',
        description: "Ambious IT Student and Web Developer"
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


export default class HomePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        return (
            <section className="homePage-container">
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
        )
    }

}

