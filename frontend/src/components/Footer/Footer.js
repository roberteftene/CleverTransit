import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <p className="title">
            &copy; {new Date().getFullYear()}&nbsp;
            <a href="https://github.com/roberteftene/CleverTransit">
                CleverTransit
            </a>
        </p>
        <p>
            Bucharest University of Economic Studies
            <br/>
            Faculty of Cybernetics, Statistics and Economic Informatics
        </p>
    </footer>
  );
}

export default Footer;